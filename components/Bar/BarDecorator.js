import handle, {preventDefault} from '@enact/core/handle';
import useHandlers from '@enact/core/useHandlers';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';

function useInitialZoom (bounds, setZoom, setScrollLeft, startTime, endTime, zoom, view) {
	// object state to flag the single-use hook
	const ref = useRef(false);

	useLayoutEffect(() => {
		if (ref.current || !bounds || !Array.isArray(view) || view.length !== 2) return;

		const start = Math.max(view[0], startTime);
		const end = Math.min(view[1], endTime);

		const nextZoom = (endTime - startTime) / (end - start);
		const nextWidth = (bounds.width / zoom) * nextZoom;
		const nextScrollLeft = Math.abs((nextWidth - bounds.width) / 2);

		if (zoom !== nextZoom) {
			ref.current = true;
			setZoom(nextZoom);
			setScrollLeft(nextScrollLeft);
		}
	}, [bounds, setZoom, setScrollLeft, startTime, endTime, zoom, view]);
}

function useBounds (ref) {
	const [bounds, setBounds] = useState(null);

	useEffect(() => {
		if (!ref.current) return;

		const node = ref.current;
		setBounds(node.firstChild.getBoundingClientRect());
	}, [ref, setBounds]);

	return bounds;
}

function useWheel (ref, onWheel) {
	useEffect(() => {
		if (!ref.current) return;

		const node = ref.current;
		node.addEventListener('wheel', onWheel, {passive: false});
		return () => {
			node.removeEventListener('wheel', onWheel, {passive: false});
		};
	}, [ref, onWheel]);
}

const barHandlers = {
	onScroll: handle(
		({target}, props, {scrollLeft}) => target.scrollLeft !== scrollLeft,
		({target: {scrollLeft}}, props, {setScrollLeft}) => setScrollLeft(scrollLeft)
	),
	onWheel: handle(
		({deltaX, deltaY}) => Math.abs(deltaY) > Math.abs(deltaX) && deltaY !== 0,
		preventDefault,
		({clientX, deltaY}, props, {bounds, scrollLeft, setScrollLeft, setZoom, zoom}) => {
			const factor = 1 + (0.05 * Math.sign(deltaY));
			const nextZoom = Math.min(8, Math.max(1, zoom * factor));
			const nextWidth = (bounds.width / zoom) * nextZoom;
			const nextScrollLeft = Math.max(0, ((nextWidth * (clientX + scrollLeft)) / bounds.width) - clientX);

			setScrollLeft(nextScrollLeft);
			setZoom(nextZoom);
		},
	)
};

const BarDecorator = (Wrapped) => {
	// eslint-disable-next-line no-shadow
	return function BarDecorator ({defaultZoom = 2, startTime, endTime, view, ...rest}) {
		const [zoom, setZoom] = useState(defaultZoom);
		const [scrollLeft, setScrollLeft] = useState(0);
		const ref = useRef(null);
		const bounds = useBounds(ref);
		const {onWheel, onScroll} = useHandlers(barHandlers, rest, {bounds, scrollLeft, setZoom, setScrollLeft, zoom});

		useWheel(ref, onWheel);
		useInitialZoom(bounds, setZoom, setScrollLeft, startTime, endTime, zoom, view);
		useLayoutEffect(() => {
			if (ref.current) ref.current.scrollLeft = scrollLeft;
		}, [ref, scrollLeft]);

		return (
			<Wrapped
				{...rest}
				componentRef={ref}
				endTime={endTime}
				onScroll={onScroll}
				startTime={startTime}
				zoom={zoom}
			/>
		);
	}
};

export default BarDecorator;
export {
	BarDecorator
};

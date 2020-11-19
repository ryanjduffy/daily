import kind from '@enact/core/kind';
import React from 'react';

import BarDecorator from './BarDecorator';
import CurrentTime from './CurrentTime';
import Hour from './Hour';
import Schedule from './Schedule';

import css from './Bar.module.css';

const BarBase = kind({
	name: 'BarBase',
	styles: {
		css,
		className: 'bar'
	},
	handlers: {
		calculateTimeRatio: (ev, {endTime, startTime}) => {
			let time = ev;
			let relative = true;

			if (typeof ev === 'object') {
				({time, relative} = ev);
			}

			return (time - (relative ? startTime : 0)) * 100 / (endTime - startTime);
		}
	},
	computed: {
		style: ({style, zoom = 1}) => ({...style, '--bar-zoom': zoom})
	},
	render: ({calculateTimeRatio, children, componentRef, startTime = 0, endTime = 60 * 24, ...rest}) => {
		delete rest.zoom;

		return (
			<div {...rest} ref={componentRef}>
				<div className={css.content}>
					<CurrentTime calculateTimeRatio={calculateTimeRatio} />
					{Array.from({length: Math.ceil((endTime - startTime) / 60)}, (_, i) => {
						const hour = (Math.ceil(startTime / 60) + i) * 60;
						return (
							<Hour calculateTimeRatio={calculateTimeRatio} hour={hour} key={hour} />
						)
					})}
					{React.Children.map(children, child => React.cloneElement(child, {
						calculateTimeRatio
					}))}
				</div>
			</div>
		)
	}
});

const Bar = BarDecorator(BarBase);

export default Bar;
export {
	Bar,
	BarBase,
	Schedule
};

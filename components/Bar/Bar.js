import kind from '@enact/core/kind';
import React from 'react';

import BarDecorator from './BarDecorator';
import Hour from './Hour';
import Schedule from './Schedule';

import css from './Bar.module.css';

const BarBase = kind({
	name: 'BarBase',
	styles: {
		css,
		className: 'bar'
	},
	computed: {
		style: ({style, zoom = 1}) => ({...style, '--bar-zoom': zoom})
	},
	render: ({children, componentRef, startTime = 0, endTime = 60 * 24, ...rest}) => {
		delete rest.zoom;

		const factor = 100 / (endTime - startTime);
		return (
			<div {...rest} ref={componentRef}>
				<div className={css.content}>
					{Array.from({length: Math.ceil((endTime - startTime) / 60)}, (_, i) => {
						const hour = (Math.ceil(startTime / 60) + i) * 60;
						return (
							<Hour startTime={startTime} endTime={endTime} hour={hour} key={hour} />
						)
					})}
					{React.Children.map(children, child => React.cloneElement(child, {
						factor,
						startTime
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

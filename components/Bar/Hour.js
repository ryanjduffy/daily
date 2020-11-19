import kind from '@enact/core/kind';
import React from 'react';

import css from './Hour.module.css';

const HourBase = kind({
	name: 'HourBase',
	styles: {
		css,
		className: 'hour'
	},
	computed: {
		children: ({hour}) => {
			const h = Math.floor(hour / 60);

			return `${h % 12 || 12} ${h >= 12 ? 'pm' : 'am'}`;
		},
		style: ({endTime, startTime, style, hour}) => {
			const factor = 100 / (endTime - startTime);
			return {
				...style,
				left: `${(hour - startTime) * factor}%`,
				width: `${60 * factor}%`
			};
		}
	},
	render: ({children, componentRef, ...rest}) => {
		delete rest.endTime;
		delete rest.startTime;
		delete rest.hour;

		return (
			<div {...rest} ref={componentRef}>
				<div className={css.tick} />
				<label>{children}</label>
			</div>
		)
	}
});

export default HourBase;
export {
	HourBase as Hour,
	HourBase
};

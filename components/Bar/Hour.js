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
		style: ({calculateTimeRatio, style, hour}) => {
			return {
				...style,
				left: `${calculateTimeRatio(hour)}%`,
				width: `${calculateTimeRatio({time: 60, relative: false})}%`
			};
		}
	},
	render: ({children, componentRef, ...rest}) => {
		delete rest.calculateTimeRatio;
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

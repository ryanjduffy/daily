import kind from '@enact/core/kind';
import React from 'react';

import css from './Schedule.module.css';

const ScheduleBase = kind({
	name: 'ScheduleBase',
	styles: {
		css,
		className: 'schedule'
	},
	render: ({children, factor, startTime, ...rest}) => {

		return (
			<div {...rest}>
				{children && children.map((child, index) => {
					const {start, duration, color, icon, title} = child;

					const style = {
						background: color,
						left: (start - startTime) * factor + '%',
						width: duration * factor + '%'
					};

					return (
						<div className={css.item} style={style} key={index} title={title}>
							{icon} {title}
						</div>
					);
				})}
			</div>
		)
	}
});

export default ScheduleBase;
export {
	ScheduleBase as Schedule,
	ScheduleBase
};

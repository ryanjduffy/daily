import kind from '@enact/core/kind';
import React, { useEffect, useState } from 'react';

import css from './CurrentTime.module.css';

const CurrentTimeBase = kind({
	name: 'CurrentTimeBase',
	styles: {
		css,
		className: 'currentTime'
	},
	computed: {
		style: ({calculateTimeRatio, time, style}) => ({
			...style,
			'left': `${calculateTimeRatio(time)}%`
		})
	},
	render: ({...rest}) => {
		delete rest.calculateTimeRatio;

		return (
			<div {...rest}>
				<label>Now</label>
			</div>
		)
	}
});

function timeToMinutes () {
	const d = new Date(Date.now());

	return (d.getHours() * 60) + d.getMinutes() + Math.round(d.getSeconds() / 60);
}

// eslint-disable-next-line no-shadow
const CurrentTimeDecorator = Wrapped => function CurrentTimeDecorator (props) {
	const [time, setTime] = useState(timeToMinutes());

	useEffect(() => {
		const id = setInterval(() => setTime(timeToMinutes()), 20000);

		return () => clearInterval(id);
	}, [setTime]);

	return (
		<Wrapped {...props} time={time} />
	)
}

const CurrentTime = CurrentTimeDecorator(CurrentTimeBase);

export default CurrentTime;
export {
	CurrentTime,
	CurrentTimeBase
};

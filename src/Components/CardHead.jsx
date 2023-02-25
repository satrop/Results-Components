import { motion, animate } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

function Counter({ from, to }) {
	const nodeRef = useRef();

	useEffect(() => {
		const node = nodeRef.current;

		const controls = animate(from, to, {
			duration: 4,
			onUpdate(value) {
				node.textContent = value.toFixed(0);
			},
		});

		return () => controls.stop();
	}, [from, to]);

	return <p ref={nodeRef} />;
}

const CardHead = () => {
	const transition = { duration: 4, yoyo: Infinity, ease: 'easeInOut' };

	return (
		<div className="card card--head | border-radius--lg gradient-1 white--fc flow">
			<div className="result--header | light-blue--fc">Your Results</div>
			<div className="result-holder">
				<div className="result--total">
					<Counter from={0} to={76} />
				</div>
				<div className="result--percent | light-blue--fc">of 100</div>
				<svg
					viewBox="0 0 140 140"
					fill="none"
					className="stroke"
					xmlns="http://www.w3.org/2000/svg">
					<motion.circle
						cx="70"
						cy="70"
						r="67.5"
						strokeWidth="5"
						strokeLinecap="round"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: 0.76 }}
						transition={transition}
					/>
				</svg>
			</div>
			<div className="result-content">
				<div className="result--title">Great</div>
				<div className="result--text | light-blue--fc">
					Your performance exceeded 65% of the people conducting the
					test here!
				</div>
			</div>
		</div>
	);
};

export default CardHead;

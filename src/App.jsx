import CardHead from './Components/CardHead';
import { Bar } from './Components/Bar';

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

	return <span ref={nodeRef} />;
}

function App() {
	const container = {
		hidden: { opacity: 1 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.5,
				staggerChildren: 0.5,
			},
		},
	};

	const item = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
		},
	};

	return (
		<main>
			<CardHead />
			<motion.div
				className="bar-container | full-bleed"
				variants={container}
				initial="hidden"
				animate="visible">
				<div className="content | flow ">
					<div className="header">Summary</div>
					<motion.div variants={item}>
						<Bar title={'Reaction'} icon={'flash'} extraClass="red">
							<Counter from={0} to={80} />
						</Bar>
					</motion.div>
					<motion.div variants={item}>
						<Bar
							title={'Memory'}
							icon={'brain'}
							extraClass="yellow">
							<Counter from={0} to={92} />
						</Bar>
					</motion.div>
					<motion.div variants={item}>
						<Bar
							title={'Verbal'}
							icon={'chat-remove'}
							extraClass="green">
							<Counter from={0} to={61} />
						</Bar>
					</motion.div>
					<motion.div variants={item}>
						<Bar
							title={'Visual'}
							icon={'eye-empty'}
							extraClass="blue">
							<Counter from={0} to={73} />
						</Bar>
					</motion.div>
					<motion.button variants={item}>
						<span>Continue</span>
					</motion.button>
				</div>
			</motion.div>
		</main>
	);
}

export default App;

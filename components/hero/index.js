'use strict';

import React from 'react';
import css from './css/styles.scss';
const NAMESPACE = 'hero';

const Hero = props => {
	
	const { isLarge, title } = props;
	
	const setClass = () => {
		const values = [NAMESPACE];
		if (isLarge) values.push(`${NAMESPACE}--large`);
		return values.join(' ');
	};

	return (
		<>
			<div className={setClass()}>
				<div className={`${NAMESPACE}__inner`}>
					<h1 className={`${NAMESPACE}__title`}>
						{title}
					</h1>
				</div>
			</div>
		</>
	);

};

export default Hero;

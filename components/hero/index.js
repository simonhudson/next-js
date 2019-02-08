'use strict';

import React from 'react';
import css from './css/styles.scss';
const NAMESPACE = 'hero';
const PAGES = require('config/pages');
const getCurrentPath = require('static/js/utilities/get-current-path');

const Hero = props => {
	
	const currentPath = getCurrentPath(props);
	const heroData = PAGES.filter(item => item.navigation.href === currentPath)[0].hero;
	
	const setClass = () => {
		const values = [NAMESPACE];
		if (heroData.isLarge) values.push(`${NAMESPACE}--large`);
		return values.join(' ');
	};

	return (
		<>
			<div className={setClass()}>
				<div className={`${NAMESPACE}__inner`}>
					<h1 className={`${NAMESPACE}__title`}>
						{heroData.title}
					</h1>
				</div>
			</div>
		</>
	);

};

export default Hero;

'use strict';

import React from 'react';

import css from './css/styles.scss';

const MainNavigation = props => {

	return (
		<>
			<nav className="main-navigation">
				<ul>
					<li>
						<a href="/#">Home</a>
					</li>
					<li>
						<a href="/about">About</a>
					</li>
				</ul>
			</nav>
		</>
	);

};

export default MainNavigation;

'use strict';

import React from 'react';
import css from './css/styles.scss';

const PAGES = require('config/pages');

const SiteFooter = props => {
	
	const getCurrentYear = () => {
		const now = new Date();
		return now.getFullYear();
	};
	
	return (
		<>
			<div className="site-footer">
				<div className="wrap site-footer__wrap">
					<p>Copyright &copy; {getCurrentYear()}</p>
					<nav className="site-footer-navigation">
						<ul className="site-footer-navigation__list">
							{PAGES.map((item, index) => <li className="site-footer-navigation__item" key={index}><a className="site-footer-navigation__link" href={`${item.navigation.href}`}>{item.navigation.text}</a></li>)}
						</ul>
					</nav>
				</div>
			</div>
		</>
	);

};

export default SiteFooter;

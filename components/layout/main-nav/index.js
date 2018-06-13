'use strict';

import css from './css/styles.scss';
import NavItem from './nav-item';

export default () =>
	<nav>
		<ul className="main-nav">
			<NavItem href="/" text="Home"/>
			<NavItem href="about" text="About"/>
			<NavItem href="contact" text="Contact"/>
		</ul>
	</nav>

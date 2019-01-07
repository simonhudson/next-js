'use strict';

import React, { Component } from 'react';

import css from './css/styles.scss';
import Item from './item';

const ITEMS = [
	{ href: '/', text: 'Home' },
	{ href: '/about', text: 'About' },
	{ href: '/contact', text: 'Contact' }
]

class MainNavigation extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.state.isOpen = false;
	}

	toggleState = () => {
		const newState = !this.state.isOpen;
		this.setState({ isOpen: newState });
	};
	
	render = () => {

		return (
			<>
				<button className={`main-navigation__toggle ${this.state.isOpen ? 'main-navigation--is-open' : ''}`} onClick={this.toggleState} type="button">
					Menu
				</button>
				<nav className={`main-navigation ${this.state.isOpen ? 'main-navigation--is-open' : ''}`}>
					<ul className="main-navigation__list">
						{ITEMS.map((item, index) => <Item href={item.href} text={item.text} key={index}/>)}
					</ul>
				</nav>
			</>
		);
	
	}
				
};

export default MainNavigation;

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
	
	render = () => {
		
		return (
			<>
			<button
				className="main-navigation__toggle"
				onClick={() => { this.setState(prevState => ({ isOpen: !prevState.isOpen }))}}
				type="button"
			>
				<img alt="" className="main-navigation__toggle-icon" src="/static/imgs/icons/menu--dark.svg" />
				<span className="visuallyhidden">Menu</span>
			</button>
				<nav className={`main-navigation ${this.state.isOpen ? 'main-navigation--is-open' : ''}`}>
					<ul className="main-navigation__list">
						{ITEMS.map((item, index) => <Item href={item.href} text={item.text} isCurrentPath={item.href === this.props.currentPath} key={index}/>)}
					</ul>
				</nav>
			</>
		);
	
	}
				
};

export default MainNavigation;

'use strict';

import React, { Component } from 'react';

import css from './css/styles.scss';
import Item from './item';
import Toggle from './toggle';

const PAGES = require('config/pages');

class MainNavigation extends Component {

	constructor(props) {
		super(props);
		this.state = {};
		this.state.isOpen = false;
	}
	
	toggle() {
		console.log(1);
		const currentState = this.state.isOpen;
		this.setState({ isOpen: !currentState });
	}
	
	render() {
		
		return (
			<>
				<button className="main-navigation__togglex" onClick={() => this.toggle()} type="button">
					<img alt="" className="main-navigation__toggle-icon" src="/static/imgs/icons/menu--dark.svg" />
					<span className="">Menu</span>
				</button>
				<nav className={`main-navigation ${this.state.isOpen ? 'main-navigation--is-open' : ''}`}>
					<ul className="main-navigation__list">
						{PAGES.map((item, index) => <Item href={item.navigation.href} text={item.navigation.text} isCurrentPath={item.navigation.href === this.props.currentPath} key={index}/>)}
					</ul>
				</nav>
			</>
		);
	
	}
				
};

export default MainNavigation;

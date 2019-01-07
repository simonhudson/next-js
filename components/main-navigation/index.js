'use strict';

import React, { Component } from 'react';

import css from './css/styles.scss';

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
						<li className="main-navigation__item">
							<a className="main-navigation__link" href="/">Home</a>
						</li>
						<li className="main-navigation__item">
							<a className="main-navigation__link" href="/about">About</a>
						</li>
					</ul>
				</nav>
			</>
		);
	
	}
				
};

export default MainNavigation;

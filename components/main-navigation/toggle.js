'use strict';

import React from 'react';


const Toggle = props => {
	
	return (
		<button className="main-navigation__toggle" onclick={() => props.onClick() } type="button">
			<img alt="" className="main-navigation__toggle-icon" src="/static/imgs/icons/menu--dark.svg" />
			<span className="">Menu</span>
		</button>
	);

};

export default Toggle;

'use strict';

import React from 'react';
import css from './css/styles.scss';

const VALID_BUTTON_VARIANTS = ['primary', 'secondary'];

const setClass = level => `btn--${VALID_BUTTON_VARIANTS.indexOf(level) > -1 ? level : 'primary'}`;

const Button = props => {
    
    let { children, level, type } = props;
    type = type || 'button';
    
	return (
		<button className={`btn ${setClass(level)}`} type={type}>
	         {children}
		</button>
	);	

};

export default Button;

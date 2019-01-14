'use strict';

import React from 'react';
import css from './css/styles.scss';

const setClass = level => {
    if (!level) return '';
    return `btn--${level}`;
}

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

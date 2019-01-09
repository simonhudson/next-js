'use strict';

import React from 'react';
import css from './css/styles.scss';

const VALID_TYPES = [
	'error',
	'info',
	'success',
	'warning',
];

const renderIcon = type => {
	return (
		<img alt="" className="alert__icon" src={`/static/imgs/icons/${type}--dark.svg`} />
	);
};

const Alert = props => {
	
	if (!VALID_TYPES.includes(props.type)) return null;
	
	const { children, hasIcon, type } = props;

	return (
		<>
			<div className={`alert alert--is-${type} ${hasIcon ? 'alert--has-icon' : ''}`}>
				{hasIcon ? renderIcon(type) : null}
				{children}
			</div>
		</>
	);

};

export default Alert;

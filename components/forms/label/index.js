'use strict';

import React from 'react';
import css from './css/styles.scss';

const Label = props => {
	
	const { isHidden, id, text } = props;
	
	return (
		<label className={`${isHidden ? 'visuallyhidden' : ''}`} htmlFor={`${id}`}>{`${text}`}</label>
	);

};

export default Label;

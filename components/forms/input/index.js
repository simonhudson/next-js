'use strict';

import React from 'react';
import css from './css/styles.scss';

const Input = props => {

	const {
		id,
		labelIsHidden,
		label,
		placeholder,
		type,
		validation,
	} = props;

	return (
		<>
			<label className={`${labelIsHidden ? 'visuallyhidden' : ''}`} htmlFor={`${id}`}>{`${label}`}</label>
			<input id={`${id}`} />
		</>
	);

};

export default Input;

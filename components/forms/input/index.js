'use strict';

import React from 'react';
import Label from 'components/forms/label';
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

	const getType = () => type ? type : 'text';

	return (
		<>
			<Label id={id} isHidden={labelIsHidden} text={label} />
			<input id={`${id}`} type={getType()} />
		</>
	);

};

export default Input;

'use strict';

import React from 'react';
import Label from 'components/forms/label';
import css from './css/styles.scss';

const Radio = props => {
	
	const {
		id,
		labelIsHidden,
		label,
		name,
		validation,
		value
	} = props;

	return (
		<div>
			<input id={`${id}--${value}`} name={id} type="radio" value={value} />
			<Label id={`${id}--${value}`} text={label} />
		</div>
	);

};

export default Radio;

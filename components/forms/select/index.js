'use strict';

import React from 'react';
import Label from 'components/forms/label';
import css from './css/styles.scss';

const Select = props => {

	const {
		defaultOption,
		id,
		labelIsHidden,
		label,
		options,
		validation,
	} = props;
	
	
	if (!id || !label || !options || !options.length) return null;
	
	const setDefaultOption = () => !!defaultOption ? <option value="">{`${defaultOption}`}</option> : null;
	
	return (
		<>
			<Label id={id} isHidden={labelIsHidden} text={label} />
			<select>
				{setDefaultOption()}
				{options.map((item, index) => <option key={index} value={item}>{`${item}`}</option>)}
			</select>
		</>
	);

};

export default Select;

'use strict';

import React from 'react';
import Radio from 'components/forms/radio';

const RadioGroup = props => {

	const { id, fields, legend } = props;
	
	if (!fields || !fields.length) return null;
	
	return (
		<fieldset>
			<legend>{legend || 'Please select an option'}</legend>
			{fields.map((item, index) => <Radio id={id} value={item.value} label={item.label} />)}
		</fieldset>
	);

};

export default RadioGroup;

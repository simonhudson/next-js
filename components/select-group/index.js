'use strict';

import React from 'react';
import css from './css/styles.scss';

const SelectGroup = props => {

	return (
		<fieldset className="select-group__wrap">
			<legend className="faux-label">{props.legend}</legend>
			<div className="select-group">
				{props.children}
			</div>
		</fieldset>
	);

};

export default SelectGroup;

'use strict';

import React from 'react';
import css from './css/styles.scss';

const FormElementRow = props => {

	const { children } = props;

	return (
		<div className="form-element-row">
			{children}
		</div>
	);

};

export default FormElementRow;

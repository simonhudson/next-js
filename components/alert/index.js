'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import css from './css/styles.scss';

const VALID_TYPES = [
	'error',
	'info',
	'success',
	'warning',
];

const Alert = props => {
	
	const { children, hasIcon, type } = props;

	return (
		<>
			<div className={`alert alert--is-${type}`}>
				{children}
			</div>
		</>
	);

};

Alert.propTypes = {
	type: PropTypes.oneOf(['error', 'info', 'success', 'warning'])
}

export default Alert;

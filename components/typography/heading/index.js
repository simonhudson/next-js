'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import css from './css/styles.scss';

const Heading = props => {
	
	const { children, level } = props;
	
	switch(level) {
		case '1':
			return <h1>{children}</h1>
			break;
		case '2':
			return <h2>{children}</h2>
			break;
		case '3':
			return <h3>{children}</h3>
			break;
		case '4':
			return <h4>{children}</h4>
			break;
		case '5':
			return <h5>{children}</h5>
			break;
		case '6':
			return <h6>{children}</h6>
			break;
		default:
			return (null);
	}
};

export default Heading;
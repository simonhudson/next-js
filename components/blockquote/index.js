'use strict';

import React from 'react';
import Author from './author';
import css from './css/styles.scss';

const setClass = props => {
	let values = [];
	if (props.author) values.push('blockquote--has-author');
	return values.join(' ');
};

const BlockQuote = props => {

	return (
		<blockquote className={`blockquote ${setClass(props)}`}>
			{props.children}
			<Author {...props} />
		</blockquote>
	);

};

export default BlockQuote;

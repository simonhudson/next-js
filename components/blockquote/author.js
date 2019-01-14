'use strict';

import React from 'react';

const Author = props => {
	
	const { author } = props;

	if (!author) return null;
	
	return (
		<span className="blockquote__author">{author}</span>
	);

};

export default Author;

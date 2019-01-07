'use strict';

import React from 'react';

const Item = props => {

	const { href, text } = props;

	return (
		<li className="main-navigation__item">
			<a className="main-navigation__link" href={`${href}`}>{text}</a>
		</li>
	);

};

export default Item;

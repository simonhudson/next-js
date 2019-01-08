'use strict';

import React from 'react';

const Item = props => {

	const { href, isCurrentPath, text } = props;

	return (
		<li className="main-navigation__item">
			<a className={`main-navigation__link ${isCurrentPath ? 'main-navigation__link--current' : ''}`} href={`${href}`}>{text}</a>
		</li>
	);

};

export default Item;

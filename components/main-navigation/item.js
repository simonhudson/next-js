'use strict';

import React from 'react';
import Link from 'next/link';

const Item = props => {

	const { href, isCurrentPath, text } = props;

	return (
		<li className="main-navigation__item">
			<Link href={`${href}`}>
				<a className={`main-navigation__link ${isCurrentPath ? 'main-navigation__link--current' : ''}`}>
					{text}
				</a>
			</Link>
		</li>
	);

};

export default Item;

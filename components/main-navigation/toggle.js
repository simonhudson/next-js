'use strict';

import React from 'react';

const Toggle = props => {

	return (
		<button
			className="main-navigation__toggle"
			onClick={props.onClick}
			type="button"
		>
			Menux
		</button>
	);

};

export default Toggle;

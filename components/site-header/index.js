'use strict';

import React from 'react';

import css from './css/styles.scss';

import SiteLogo from 'components/site-logo';

const SiteHeader = props => {

	return (
		<>
			<header className="site-header">
				<SiteLogo />
			</header>
		</>
	);

};

export default SiteHeader;

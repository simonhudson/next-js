'use strict';

import React from 'react';

import css from './css/styles.scss';

import MainNavigation from 'components/main-navigation';
import SiteLogo from 'components/site-logo';

const SiteHeader = props => {
        	
	return (
		<>
			<header className="site-header">
				<SiteLogo />
				<MainNavigation />
			</header>
		</>
	);	

};

export default SiteHeader;

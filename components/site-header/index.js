'use strict';

import React from 'react';

import css from './css/styles.scss';

import MainNavigation from 'components/main-navigation';
import SiteLogo from 'components/site-logo';

const SiteHeader = props => {
    
    const currentPath = props.__NEXT_DATA__.pathname;
    
	return (
		<>
			<header className="site-header">
				<SiteLogo />
				<MainNavigation currentPath={currentPath}/>
			</header>
		</>
	);	

};

export default SiteHeader;

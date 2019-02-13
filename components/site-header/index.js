'use strict';

import React from 'react';
import MainNavigation from 'components/main-navigation';
import SiteLogo from 'components/site-logo';
import css from './css/styles.scss';
const getCurrentPath = require('static/js/utilities/get-current-path');

const SiteHeader = props => {
        
	return (
		<>
			<header className="site-header">
				<SiteLogo />
				<MainNavigation currentPath={null} />
			</header>
		</>
	);	

};

export default SiteHeader;

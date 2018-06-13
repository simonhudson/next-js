'use strict';

import HeadingLevel1 from '../components/typography/heading-1';
import HeadingLevel2 from '../components/typography/heading-2';
import Link from '../components/interactive/link';
import ExternalLink from '../components/interactive/link-external';
import Button from '../components/interactive/button';
import MainNav from '../components/layout/main-nav';
import SiteLogo from '../components/layout/site-logo';

export default () =>
	<>
		<SiteLogo/>
		<MainNav/>
		<HeadingLevel1 string="Primary"/>
		<HeadingLevel2 string="Secondary heading"/>
		<Button text="Click me"/>
		<p><Link href="http://experian.co.uk" text="Internal link" isExternal /></p>
		<p><ExternalLink href="http://bbc.co.uk" text="External link" /></p>
	</>

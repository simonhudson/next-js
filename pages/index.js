'use strict';

import HeadingLevel1 from '../components/typography/heading-1';
import HeadingLevel2 from '../components/typography/heading-2';
import Link from '../components/interactive/link';
import Button from '../components/interactive/button';
import MainNav from '../components/layout/main-nav';
import SiteLogo from '../components/layout/site-logo';

export default () =>
	<>
		<SiteLogo></SiteLogo>
		<MainNav></MainNav>
		<HeadingLevel1 string="Hello there!"></HeadingLevel1>
		<HeadingLevel2 string="Secondary heading"></HeadingLevel2>
		<Button text="Click me"></Button>
		<p>This is a <Link href="http://www.bbc.co.uk" text="BBC link"></Link></p>
	</>

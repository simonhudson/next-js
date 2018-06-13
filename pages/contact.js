'use strict';

import Heading from '../components/typography/heading';
import Input from '../components/form/input';
import Submit from '../components/form/submit';

export default () =>
	<>
		<Heading level="1" text="Contact us"/>
		<form action="/foo" id="contact" name="contact" method="post">
		<Input id="name" label="Your name"/>
		<Input id="email" label="Your e-mail" type="email" isRequired="true"/>
		<Submit label="Send"/>
		</form>
	</>

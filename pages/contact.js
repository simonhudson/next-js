'use strict';

import React from 'react';

import Heading from 'components/typography/heading';
import Input from 'components/forms/input';

const Contact = props => {
	return (
		<>
			<Heading level="1">Contact</Heading>
			<Input id="contact-name" label="Name" />
			<Input id="contact-phone" label="Phone number" type="number" />
		</>
	);
};

export default Contact;

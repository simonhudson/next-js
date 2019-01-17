'use strict';

import React from 'react';

import Heading from 'components/typography/heading';
import ContactForm from 'components/contact-form';

const Contact = props => {
	return (
		<>
			<Heading level="1">Contact</Heading>
			<ContactForm />
		</>
	);
};

export default Contact;

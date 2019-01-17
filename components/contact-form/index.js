'use strict';

import React from 'react';

import Button from 'components/button';
import FormElementRow from 'components/forms/element-row';
import Input from 'components/forms/input';

const ContactForm = props => {

	return (
		<form id="contact">
			<FormElementRow>
				<Input id="contact-name" label="Name" />
			</FormElementRow>
			<FormElementRow>
				<Input id="contact-phone" label="Phone number" type="number" />
			</FormElementRow>
			<Button type="submit">Send</Button>
		</form>
	);

};

export default ContactForm;

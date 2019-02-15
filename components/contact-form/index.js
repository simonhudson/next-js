'use strict';

import React from 'react';

import Button from 'components/button';
import DateOfBirthSelect from 'components/dob-select';
import FormElementRow from 'components/forms/element-row';
import Input from 'components/forms/input';
import Radio from 'components/forms/radio';
import Select from 'components/forms/select';

const ContactForm = props => {

	return (
		<form id="contact">
			<FormElementRow>
				<Input id="contact-name" label="Name" />
			</FormElementRow>
			<FormElementRow>
				<Input id="contact-phone" label="Phone number" type="number" />
			</FormElementRow>
			<DateOfBirthSelect minAge={18} />
			<Radio id="gender" value="Male" label="Male" />
			<Radio id="gender" value="Female" label="Female" />
			<Button type="submit">Send</Button>
		</form>
	);

};

export default ContactForm;

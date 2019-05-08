'use strict';

import React from 'react';

import Button from 'components/button';
import DateOfBirthSelect from 'components/dob-select';
import FormElementRow from 'components/forms/element-row';
import Input from 'components/forms/input';
import RadioGroup from 'components/forms/radio-group';
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
			<RadioGroup id="gender" legend="Please tell us your gender" fields={[
				{ value: 'male', label: 'Male' },
				{ value: 'female', label: 'Female' },
				{ value: 'other', label: 'Other' }
			]} />
			<Button type="submit">Send</Button>
		</form>
	);

};

export default ContactForm;

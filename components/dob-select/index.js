'use strict';

import React from 'react';
import FormElementRow from 'components/forms/element-row';
import Label from 'components/forms/label';
import Select from 'components/forms/select';
import SelectGroup from 'components/select-group';

const generateNumberArray = require('static/js/utilities/generate-number-array');
const getMonths = require('static/js/utilities/get-months');

const now = new Date();
const currentYear = now.getUTCFullYear();

const DateOfBirthSelect = props => {
	
	const minAge = parseInt(props.minAge, 10) || 0;
	
	const OPTIONS = {
		day: generateNumberArray({ start: 1, end: 31 }),
		month: getMonths(),
		year: generateNumberArray({ start: (currentYear - 100), end: (currentYear - minAge), descending: true }),
	};
	
	return (
		<SelectGroup legend="Date of birth">
			<FormElementRow>
				<Select defaultOption="Day" id="dob--day" label="Day" labelIsHidden={true} options={OPTIONS.day} />
			</FormElementRow>
			<FormElementRow>
				<Select defaultOption="Month" id="dob--month" label="Month" labelIsHidden={true} options={OPTIONS.month} />
			</FormElementRow>
			<FormElementRow>
				<Select defaultOption="Year" id="dob--year" label="Year" labelIsHidden={true} options={OPTIONS.year} />
			</FormElementRow>
		</SelectGroup>
	);

};

export default DateOfBirthSelect;

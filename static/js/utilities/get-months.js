'use strict';

const MONTHS = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

module.exports = (truncate = false) => {
	let months = MONTHS;
	if (truncate) months = months.map((item, index) => item.substr(0, 3));
	return months;
};

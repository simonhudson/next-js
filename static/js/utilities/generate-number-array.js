'use strict';

module.exports = options => {
	const start = options.start || 0;
	const end = options.end || 100;
	const descending = options.descending || false;
	const value = [];
	for (let i = start; i <= end; i++) value.push(i);
	if (descending) value.reverse();
	return value;
};

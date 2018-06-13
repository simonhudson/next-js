'use strict';

import css from './css/styles.scss';

const setHeading = (level, text) => {
	if (level == 1) return <h1>{text}</h1>;
	if (level == 2) return <h2>{text}</h2>;
	if (level == 3) return <h3>{text}</h3>;
	if (level == 4) return <h4>{text}</h4>;
	if (level == 5) return <h5>{text}</h5>;
	if (level == 6) return <h6>{text}</h6>;
};

export default ({level, text}) => setHeading(level, text);

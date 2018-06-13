'use strict';

import css from './css/styles.scss';

export default ({id, label, type, isRequired}) =>
	<>
		<label htmlFor={id}>{label}</label>
		<input id={id} name={id} type={type || "text"} required={isRequired}/>
	</>

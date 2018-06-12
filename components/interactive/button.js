'use strict';

export default ({text}) =>
	<>
		<style jsx>{`
		.btn {
			background: #cc0000;
			border: 0;
			color: #fff;
			padding: 1.4em;
		}
		`}</style>
		<button class="btn">{text}</button>
	</>

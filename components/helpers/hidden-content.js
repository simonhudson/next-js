'use strict';

export default ({text}) =>
	<>
		<style jsx>{`
		.hidden-content {
			display: none;
		}
		`}</style>
		<span class="hidden-content">{text}</span>
	</>

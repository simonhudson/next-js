'use strict';

export default ({text, href}) =>
	<>
		<style jsx>{`
		.link {
			color: #cc0000;
		}
		.link:hover,
		.link:focus {
			text-decoration: none;
		}
		`}</style>
		<a class="link" href={href}>{text}</a>
	</>
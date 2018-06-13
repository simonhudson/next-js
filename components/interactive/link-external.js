'use strict';

import HiddenContent from '../helpers/hidden-content';

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
		<a class="link link--external" href={href} target="_blank">{text}<HiddenContent text="&nbsp;(opens in a new tab/window)"/></a>
	</>

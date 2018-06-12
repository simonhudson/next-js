'use strict';

export default () =>
	<>
		<style jsx>{`
		.main-nav {
			display: flex;
			justify-content: space-between;
			list-style: none;
			margin: 0;
			padding: 0;
		}
		`}</style>
		<nav>
			<ul class="main-nav">
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/Contact">Contact</a></li>
			</ul>
		</nav>
	</>

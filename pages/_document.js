'use strict';

import Document, { Head, Main, NextScript } from 'next/document'
import css from 'static/css/styles.scss';

import Alert from 'components/alert';
import SiteHeader from 'components/site-header';

export default class App extends Document {
	
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		
		const { props } = this;
		
		return (
			<html>
			<Head>
				<title></title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<link rel="stylesheet" href="/_next/static/style.css" />
			</Head>
			<body>
				<noscript className="no-js-alert">
					<Alert type="warning">
						<div className="wrap">
							<p>This site works best when JavaScript is available in your browser.</p>
						</div>
					</Alert>
				</noscript>
				<div className="wrap">
					<SiteHeader {...props} />
					<Main />
				</div>
			</body>
			</html>
		)
	}
}

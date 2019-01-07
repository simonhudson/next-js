import Document, { Head, Main, NextScript } from 'next/document'
import css from '../static/css/styles.scss';

import Alert from 'components/alert';
import MainNavigation from 'components/navigation/main-navigation';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}

	render() {
		return (
			<html>
			<Head>
				<link rel="stylesheet" href="/_next/static/style.css" />
			</Head>
			<body>
				<noscript>
					<Alert type="warning">
						<p>This site works best when JavaScript is available in your browser.</p>
					</Alert>
				</noscript>
				<div className="wrap">
					<MainNavigation />
					<Main />
				</div>
			</body>
			</html>
		)
	}
}

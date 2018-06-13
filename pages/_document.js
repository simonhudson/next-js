import Document, { Head, Main, NextScript } from 'next/document'

import css from '../static/css/styles.scss';
import MainNav from '../components/layout/main-nav';
import SiteLogo from '../components/layout/site-logo';

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
				<div className="wrap">
					<SiteLogo/>
					<MainNav/>
					<Main />
				</div>
			</body>
			</html>
		)
	}
}

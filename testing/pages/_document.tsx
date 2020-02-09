import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GlobalStyle } from './GlobalStyle'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="description" content="Simple web boilerplate site" />
					<link rel="manifest" href="manifest.json" />
					<link rel="shortcut icon" href="favicon.png" />
					<link rel="stylesheet" href="https://unpkg.com/modern-css-reset/dist/reset.min.css" />
				</Head>
				<body>
					<Main />
					<NextScript />
					<GlobalStyle />
				</body>
			</Html>
		)
	}
}

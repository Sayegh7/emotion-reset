import App from 'next/app'
import Head from 'next/head'

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props

		return (
			<>
				<Head>
					<title>emotion-reset</title>
				</Head>
				<Component {...pageProps} />
			</>
		)
	}
}

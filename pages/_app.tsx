import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script
				async
				defer
				data-website-id="1b6c4e62-b876-4452-97fb-658d7bc3a98b"
				src="https://umami-fork-alpha.vercel.app/umami.js"
			></Script>
			<div id="navbar_parent">
				<Navbar />
			</div>
			<div id="main_parent">
				<Component {...pageProps} />
			</div>
		</>
	);
}

export default MyApp;

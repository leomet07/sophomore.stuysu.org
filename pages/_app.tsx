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
				data-website-id="99e445a1-7625-4edb-9a81-d3fbcef41c78"
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

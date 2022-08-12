import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Script from "next/script";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* linter looks specifically for _document file, we use _app */
			/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
			<Script id="temp" strategy="beforeInteractive">
				{`
					const localConf = localStorage.getItem("dark-mode");
					const cssConf = window.matchMedia("(prefers-color-scheme: dark)");
					if (localConf == null) {  // using == over === to catch null and undefined
						// no toggle override, default to and listen to the system theme
						document.documentElement.classList.toggle("dark-mode", cssConf.matches);
						cssConf.onchange = (event) => {document.documentElement.classList.toggle("dark-mode", event.matches)};
					} else {
						document.documentElement.classList.toggle("dark-mode", localStorage.getItem("dark-mode") === 'dark');
					}
					document.addEventListener("storage", () => {
    				cssConf.onchange = undefined;   // null out CSS event handler to prevent conflict
    				document.documentElement.classList.toggle("dark-mode",
        				localStorage.getItem("dark-mode") === 'dark');
					});
				`}
			</Script>
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
			<div id="footer_parent">
				<Footer />
			</div>
		</>
	);
}

export default MyApp;

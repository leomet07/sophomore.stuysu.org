import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
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

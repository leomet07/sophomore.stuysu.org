function getServerUrl() {
	const dev = process.env.NODE_ENV !== "production";

	return dev ? "http://localhost:3000" : process.env.VERCEL_URL;
}

export default getServerUrl;

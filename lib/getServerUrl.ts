function getServerUrl() {
	const dev = process.env.NODE_ENV !== "production";

	return dev ? "http://localhost:3000" : "https://sophomore.stuysu.org";
}

export default getServerUrl;

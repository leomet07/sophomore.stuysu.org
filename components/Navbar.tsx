import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav id={styles.nav}>
			<div id={styles.links_container}>
				<div className={styles.link}>
					<Link href="/contact">Talk to Us</Link>
				</div>
				<div className={styles.link}>
					<Link href="/policies">Policies</Link>
				</div>
				<div className={styles.link}>
					<Link href="/about">About</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

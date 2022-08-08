import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import logoImg from "../public/img/logo.png";
import sunImg from "../public/img/sun.svg";
import moonImg from "../public/img/moon.svg";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav id={styles.nav}>
			<Link href="/" passHref>
				<a>
					<Image
						src={logoImg}
						id={styles.logo}
						alt="Sophomore Caucus and the SU"
						width="50"
						height="50"
					/>
				</a>
			</Link>
			<div id={styles.links_container}>
				<div className={styles.toggle} onClick={() =>
				{
					localStorage.setItem("dark-mode", (document.documentElement.classList.contains('dark-mode') ? 'light' : 'dark'));
					document.dispatchEvent(new Event("storage"));
				}}>
					<div className={styles.sun}>
						<Image alt="" src={sunImg} />
					</div>
					<div className={styles.moon}>
						<Image alt="" src={moonImg} />
					</div>
				</div>
				<div className={styles.link}>
					<Link href="/contact">Contact</Link>
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

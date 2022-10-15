import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import logoImg from "../public/img/logo.png";
import sunImg from "../public/img/sun.svg";
import moonImg from "../public/img/moon.svg";
import sandwichImg from "../public/img/sandwich.svg";
import xImg from "../public/img/x.svg";
import Image from "next/image";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const NavLink = (props: { href: string; children: ReactNode }) => (
	<div className={styles.link}>
		<Link href={props.href}>{props.children}</Link>
	</div>
);

const Navbar = () => {
	const router = useRouter(); // used to remount/reset <nav> every navigation
	return (
		<nav id={styles.nav} key={router.asPath}>
			<div>
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
			</div>
			<div id={styles.buttons}>
				<div
					className={styles.toggle}
					onClick={() => {
						localStorage.setItem(
							"dark-mode",
							document.documentElement.classList.contains(
								"dark-mode"
							)
								? "light"
								: "dark"
						);
						document.dispatchEvent(new Event("storage"));
					}}
				>
					<div className={styles.sun}>
						<Image alt="" src={sunImg} />
					</div>
					<div className={styles.moon}>
						<Image alt="" src={moonImg} />
					</div>
				</div>
				<input id={styles.toggle} type="checkbox" />
				<label htmlFor={styles.toggle} className={styles.menu}>
					<div id={styles.sandwich}>
						<Image alt="" src={sandwichImg} />
					</div>
					<div id={styles.x}>
						<Image alt="" src={xImg} />
					</div>
				</label>
				<label
					htmlFor={styles.toggle}
					className={styles.links_container}
				>
					<NavLink href={"/opportunities"}>Opportunities</NavLink>
					<NavLink href="/contact">Contact</NavLink>
					<NavLink href="/policies">Policies</NavLink>
					<NavLink href="/about">About</NavLink>
				</label>
			</div>
		</nav>
	);
};

export default Navbar;

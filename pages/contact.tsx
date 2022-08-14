import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Contact.module.css";
import SiInstagram from "../public/img/socials/instagram.svg";
import SiFacebook from "../public/img/socials/facebook.svg";
import SiGithub from "../public/img/socials/github.svg";
import Image from "next/image";
import { GradientButton } from "../components/Gradient";

const Contact: NextPage = () => {
	return (
		<>
			<Head>
				<title>Contact the Sophomore Caucus</title>
				<meta
					name="description"
					content="Contact the Sophomore Caucus"
				/>
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>CONTACT US</h1>

				<div className={styles.prompt}>
					<GradientButton id={styles.lets_talk}>
						<p>Let&#39;s Talk!</p>
					</GradientButton>
					<div className={styles.limiter}>
						<div className={styles.circle} />
						<div className={styles.buttons}>
								<a
									href={
										"https://www.instagram.com/sophomorecaucus/"
									}
									target={"_blank"}
									rel="noreferrer"
								>
									<Image alt="Instagram @sophomorecaucus" src={SiInstagram} layout="responsive" />
								</a>
								<a
									href={
										"https://www.facebook.com/StuySophCaucus"
									}
									target={"_blank"}
									rel="noreferrer"
								>
									<Image alt="Facebook @StuySophCaucus" src={SiFacebook} layout="responsive" />
								</a>
								<a
									href={
										"https://github.com/leomet07/sophomore.stuysu.org"
									}
									target={"_blank"}
									rel="noreferrer"
								>
									<Image alt="Git Hub leomet07/sophomore.stuysu.org" src={SiGithub} layout="responsive" />
								</a>
						</div>
						<p id={styles.feedback}>
							Got feedback for the caucus? Provide it anonymously{" "}
							<a
								href={"https://forms.gle/uMz4TydXi1h1biHf8"}
								target={"_blank"}
								rel="noreferrer"
							>
								here
							</a>
							.
						</p>
					</div>
				</div>
			</main>
		</>
	);
};

export default Contact;

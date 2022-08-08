import type { NextPage } from "next";
import Head from "next/head";
import { Profile, Director } from "../components/Profile";
import styles from "../styles/About.module.css";

const About: NextPage = () => {
	return (
		<>
			<Head>
				<title>About the Sophomore Caucus</title>
				<meta
					name="description"
					content="About the Sophomore Caucus"
				/>
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>ABOUT US</h1>
				<div className={styles.presidents}>
					<Profile imgSrc={'/img/profiles/fin.jpg'} imgAlt={'_placehodler'} >
						<p>
							According to all known laws of aviation, there is no way a bee should be able to fly.
							Its wings are too small to get its fat little body off the ground.
						</p>
						<p>
							The bee, of course, flies anyway because bees don&apos;t care what humans think is impossible.
						</p>
					</Profile>
					<Profile imgSrc={'/img/profiles/fin.jpg'} imgAlt={'_placehodler'} >
						<p>
							According to all known laws of aviation, there is no way a bee should be able to fly.
							Its wings are too small to get its fat little body off the ground.
						</p>
						<p>
							The bee, of course, flies anyway because bees don&apos;t care what humans think is impossible.
						</p>
					</Profile>
				</div>
				<div className={styles.directors}>
					<Director imgSrc={'/img/profiles/david.jpg'} imgAlt={'theegghead27 pfp'} description={'david (egg head)'}/>
					<Director imgSrc={'/img/profiles/lenny.jpg'} imgAlt={'leomet07 pfp'} description={'lenny (leomet)'}/>
					<Director imgSrc={'/img/profiles/will.jpg'} imgAlt={'willpill pfp'} description={'will (pill)'}/>
				</div>
			</main>
		</>
	)
}

export default About;

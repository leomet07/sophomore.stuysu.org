import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ScheduleWidget from "../components/ScheduleWidget";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Sophomore Caucus</title>
				<meta
					name="description"
					content="The Sophomore Caucus website"
				/>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>
					SOPHOMORE CAUCUS&nbsp;
					<span className={styles.bolded_insert}>&lsquo;22</span>
				</h1>
				<section id={styles.schedule_widget}>
					<ScheduleWidget />
				</section>
			</main>
		</>
	);
};

export default Home;

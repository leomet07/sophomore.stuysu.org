import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Announcement from "../components/Announcement";
import ScheduleWidget from "../components/ScheduleWidget";
import BellSchedule from "../components/BellSchedule";
import WeeklySchedule from "../components/WeeklySchedule";

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
				<section id={styles.schedule_information}>
					<div id={styles.bell_schedule_container}>
						<BellSchedule />
					</div>
					<div id={styles.weekly_schedule_container}>
						<WeeklySchedule />
					</div>
				</section>
				<section id={styles.announcements}>
					<Announcement
						text={"This program is brought to you by"}
						date={"6/9"}
					/>
					<Announcement
						text={"contributions to your local PBS station"}
						date={"6/9"}
					/>
					<Announcement
						text={"by viewers like you, thank you!"}
						date={"6/9"}
					/>
					<Announcement text={"test"} date={"6/9"} />
					<Announcement text={"one two three four"} date={"6/9"} />
					<Announcement
						text={"Lorem ipsum something idk"}
						date={"12/24"}
					/>
					<Announcement text={"Something something"} date={"2/22"} />
				</section>
			</main>
		</>
	);
};

export default Home;

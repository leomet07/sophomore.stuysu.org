import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Announcement from "../components/Announcement";
import ScheduleWidget from "../components/ScheduleWidget";
import BellSchedule from "../components/BellSchedule";
import WeeklySchedule from "../components/WeeklySchedule";
import { ReceivedAnnouncement } from "../types/db_types";
import getServerUrl from "../lib/getServerUrl";
import { InferGetServerSidePropsType } from "next";
import { Key } from "react";

const Home = (
	props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
	const parseDate = function (d: string) {
		return new Date(d).toLocaleString().split(",")[0];
	};
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
					{props.announcements.map((v) => (
						<Announcement
							key={v._id as Key}
							text={v.title}
							date={parseDate(String(v.date))}
						/>
					))}
				</section>
			</main>
		</>
	);
};

type getAnnouncementsResponse = {
	success: boolean;
	data: ReceivedAnnouncement[];
};

export const getServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const r: any = await fetch(getServerUrl() + "/api/get_announcements");
	const data: getAnnouncementsResponse = await r.json();
	return { props: { announcements: data.data } };
};

export default Home;

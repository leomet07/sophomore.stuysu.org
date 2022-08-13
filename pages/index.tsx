import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Announcement from "../components/Announcement";
import ScheduleWidget from "../components/ScheduleWidget";
import BellSchedule from "../components/BellSchedule";
import WeeklySchedule from "../components/WeeklySchedule";
import { ReceivedAnnouncement, ReceivedSchedule } from "../types/db_types";
import getServerUrl from "../lib/getServerUrl";
import { InferGetServerSidePropsType } from "next";
import { Key } from "react";
import { GradientTitle } from "../components/Gradient";

const Home = (
	props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
	const parseDate = function (d: string) {
		// Time is stored as GMT+0000 (aka UTC)
		// The timezone is actually US eastern (where the DB server is located), api gets it as UTC
		return new Date(d)
			.toLocaleString("en-US", { timeZone: "UTC" })
			.split(",")[0];
	};
	console.log("Server url", props.serverUrl);

	const current_schedule_name = props.current_schedule; // Hardcoded
	const current_schedule: ReceivedSchedule =
		props.schedules.find((v) => v.name == current_schedule_name) ||
		props.schedules[0];

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
					<GradientTitle>&lsquo;22</GradientTitle>
				</h1>
				<section id={styles.schedule_widget}>
					<ScheduleWidget
						current_schedule_name={current_schedule_name}
						current_schedule={current_schedule}
					/>
				</section>
				<section id={styles.schedule_information}>
					<div id={styles.bell_schedule_container}>
						<BellSchedule current_schedule={current_schedule} />
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

type getMainPageResponse = {
	success: boolean;
	announcements: ReceivedAnnouncement[];
	schedules: ReceivedSchedule[];
	current_schedule: string;
};

export const getServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const mainpage_request: any = await fetch(getServerUrl() + "/api/mainpage");
	const mainpage_json: getMainPageResponse = await mainpage_request.json();

	return {
		props: {
			announcements: mainpage_json.announcements,
			schedules: mainpage_json.schedules,
			current_schedule: mainpage_json.current_schedule,
			serverUrl: getServerUrl(),
		},
	};
};

export default Home;

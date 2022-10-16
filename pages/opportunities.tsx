import Head from "next/head";
import styles from "../styles/Opportunities.module.css";
import { GradientTitle } from "../components/Gradient";
import { Key } from "react";
import { ReceivedWeeklyBulletin } from "../types/db_types";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import getServerUrl from "../lib/getServerUrl";

const Opportunities = (
	props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
	const weeks_data = props.weekly_bulletins;

	return (
		<>
			<Head>
				<title>Opportunities Bulletin</title>
				<meta name="description" content="Opportunities Bulletin" />
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>
					STUDENT <GradientTitle>OPPORTUNITIES</GradientTitle>
				</h1>
				<div id={styles.topdiv}>
					<div id={styles.right_half}>
						<h1>Weekly Bulletin</h1>
						<p>
							Stuyvesant&apos;s condensed opportunities. Updated
							weekly by the Sophomore Caucus.
						</p>
					</div>
				</div>
				<section id={styles.bulletin}>
					<div id={styles.weeks_display}>
						{weeks_data.map((week, index) => {
							const start = 0;
							const kept = 4;
							return (
								<div
									className={styles.week}
									key={week._id as Key}
								>
									<div className={styles.week_text}>
										<h3>Week of {week.week_start}</h3>
										<p>
											{week.highlights
												.filter((item, index) => {
													// This is same as array.splice() WITHOUT mutating the original array
													// If original array is mutated and items are removed, site crashes on re-renders
													return (
														index >= start &&
														index < kept + start
													);
												})
												.join(", ")}
											, and more!
										</p>
									</div>

									<a
										href={week.url}
										className={styles.week_clickable_link}
										target="_blank"
										rel="noreferrer"
									>
										<span>&gt;</span>
									</a>
								</div>
							);
						})}
					</div>
				</section>
			</main>
		</>
	);
};

type getOpportunitiesResponse = {
	success: boolean;
	data: ReceivedWeeklyBulletin[];
	serverUrl: string;
};

export const getServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const r: any = await fetch(getServerUrl() + "/api/get_weekly_bulletins");
	const data: getOpportunitiesResponse = await r.json();

	return {
		props: { weekly_bulletins: data.data, serverUrl: getServerUrl() },
	};
};

export default Opportunities;

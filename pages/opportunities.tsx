import Head from "next/head";
import styles from "../styles/Opportunities.module.css";
import { GradientTitle } from "../components/Gradient";
import { Key } from "react";

const Opportunities = () => {
	const weeks_dummy_data = [
		{
			week_start: "12/10/22",
			activities: [
				"Carnival",
				"Science Fair Registration",
				"Dance",
				"Performance Meeting",
				"Among US",
				"Free hoodies",
				"Morning announcements",
			],
		},
		{
			week_start: "12/17/22",
			activities: [
				"Carnival",
				"Science Fair Registration",
				"Dance",
				"Performance Meeting",
				"Among US",
				"Free hoodies",
				"Morning announcements",
			],
		},
	];
	const weeks_data = weeks_dummy_data;
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
						{weeks_data.map((v, index) => (
							<div className={styles.week} key={index as Key}>
								<h3>Week of {v.week_start}</h3>
								<p>
									{v.activities.splice(0, 4).join(", ")}, and
									more!
								</p>
							</div>
						))}
					</div>
				</section>
			</main>
		</>
	);
};

export default Opportunities;

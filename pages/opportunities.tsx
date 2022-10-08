import Head from "next/head";
import styles from "../styles/Opportunities.module.css";
import { GradientTitle } from "../components/Gradient";
const Opportunities = () => {
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
						<div className={styles.week}>
							<h3>Week of 12/17</h3>
							<p>
								Carnival, Science Fair Registration, Dance &
								Performance Meeting
							</p>
						</div>
						<div className={styles.week}>
							<h3>Week of 12/24</h3>
							<p>
								Carnival, Science Fair Registration, Dance &
								Performance Meeting
							</p>
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default Opportunities;

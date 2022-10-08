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
			</main>
		</>
	);
};

export default Opportunities;

import styles from "../styles/WeeklySchedule.module.css";

const WeeklySchedule = () => {
	return (
		<div id={styles.weekly_schedule_parent}>
			<div id={styles.label}>
				<span>This Week @ Stuy</span>
			</div>
			<div id={styles.weekly_schedule_box}>
				<div id={styles.weekly_schedule}>
					<p>
						Monday <span className={styles.highlight}>Regular</span>
					</p>
					<p>
						Tuesday{" "}
						<span className={styles.highlight}>Regular</span>
					</p>
					<p>
						Wensday{" "}
						<span className={styles.highlight}>Regular</span>
					</p>
					<p>
						Thursday{" "}
						<span className={styles.highlight}>Regular</span>
					</p>
					<p>
						Friday <span className={styles.highlight}>Regular</span>
					</p>
				</div>
				<div id={styles.special_news_container}>
					<p>No special news</p>
				</div>
			</div>
		</div>
	);
};

export default WeeklySchedule;

import styles from "../styles/ScheduleWidget.module.css";

const ScheduleWidget = () => {
	return (
		<div id={styles.container}>
			<div className={styles.pill} id={styles.schedule_type}>
				<span>Regular</span>
			</div>
			<div className={styles.pill} id={styles.current_time}>
				<span>12:23 PM</span>
			</div>
			<div id={styles.schedule_widget}>
				<div className={styles.bottom}>
					<p>
						<span className={styles.highlight}>14</span> min
						<span className={styles.shorten_utes}>utes</span>
						&nbsp;passed
					</p>
				</div>
				<h1 id={styles.current_period}>Period 8</h1>
				<div className={styles.bottom}>
					<p>
						<span className={styles.highlight}>36</span> min
						<span className={styles.shorten_utes}>utes</span>
						&nbsp;left
					</p>
				</div>
			</div>
		</div>
	);
};

export default ScheduleWidget;

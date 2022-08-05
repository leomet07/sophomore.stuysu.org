import styles from "../styles/ScheduleWidget.module.css";

const ScheduleWidget = () => {
	return (
		<div id={styles.container}>
			<div id={styles.schedule_type}>
				<span>Regular</span>
			</div>
			<div id={styles.schedule_widget}>
				<div className={styles.bottom}>
					<p>
						<span className={styles.highlight}>14</span> min
						<span className={styles.shorten_utes}>utes</span>
						&nbsp;passed
					</p>
				</div>
				<h1 id={styles.current_time}>12:23 PM</h1>
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

import styles from "../styles/BellSchedule.module.css";

const BellSchedule = () => {
	return (
		<div id={styles.bell_schedule_parent}>
			<div id={styles.label}>
				<span>Bell Schedule</span>
			</div>
			<div id={styles.bell_schedule}>
				<div id={styles.schedule_container}>
					<div id={styles.right}>
						<p>
							<span className={styles.highlight}>
								Before school
							</span>
							&nbsp;Before 8:00
						</p>
						<p>
							<span className={styles.highlight}>Period 1</span>
							&nbsp;8:00 to 8:49
						</p>
						<p>
							<span className={styles.highlight}>Period 2</span>
							&nbsp;8:00 to 8:49
						</p>
						<p>
							<span className={styles.highlight}>Period 3</span>
							&nbsp;8:00 to 8:49
						</p>
						<p>
							<span className={styles.highlight}>Period 4</span>
							&nbsp;8:00 to 8:49
						</p>
						<p>
							<span className={styles.highlight}>Period 5</span>
							&nbsp;8:00 to 8:49
						</p>
					</div>

					<div id={styles.left}>
						<p>
							<span className={styles.highlight}>Period 6</span>
							&nbsp;8:00 to 8:49
						</p>
						<p>
							<span className={styles.highlight}>Period 7</span>
							&nbsp;8:00 to 8:49
						</p>
						<p>
							<span className={styles.highlight}>Period 8</span>
							&nbsp;8:00 to 8:49
						</p>
						<p>
							<span className={styles.highlight}>Period 9</span>
							&nbsp;8:00 to 8:49
						</p>
						<p>
							<span className={styles.highlight}>Period 10</span>
							&nbsp;8:00 to 8:49
						</p>
						<p>
							<span className={styles.highlight}>
								After School
							</span>
							&nbsp;After 8:49
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BellSchedule;

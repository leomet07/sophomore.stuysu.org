import styles from "../styles/ScheduleWidget.module.css";
import { GradientPill } from "./Gradient";

const ScheduleWidget = () => {
	return (
		<div id={styles.container}>
			<GradientPill title="Regular" id={styles.schedule_type} />
			<GradientPill title="12:23 PM" id={styles.current_time} />
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

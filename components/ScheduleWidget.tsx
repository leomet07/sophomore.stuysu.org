import styles from "../styles/ScheduleWidget.module.css";
import { GradientPill, GradientShadow } from "./Gradient";
import { ReceivedSchedule } from "../types/db_types";

const ScheduleWidget = (props: {
	current_schedule: ReceivedSchedule;
	current_schedule_name: string;
}) => {
	return (
		<div id={styles.container}>
			<GradientPill
				title={props.current_schedule_name}
				id={styles.schedule_type}
			/>
			<GradientPill title="12:23 PM" id={styles.current_time} />
			<GradientShadow id={styles.schedule_widget}>
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
			</GradientShadow>
		</div>
	);
};

export default ScheduleWidget;

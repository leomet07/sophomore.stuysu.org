import styles from "../styles/ScheduleWidget.module.css";
import { GradientPill, GradientShadow } from "./Gradient";
import { ReceivedSchedule } from "../types/db_types";
import { useEffect, useState } from "react";

function timeToSeconds(time: string) {
	let [shours, sminutes, sseconds, half] = time.split(/[\:\ ]/);
	let hours = Number(shours);
	let minutes = Number(sminutes);
	let seconds = Number(sseconds);

	if (half == "PM" && Number(hours) != 12) {
		hours = Number(hours) + 12;
	}
	seconds = Number(seconds) + Number(minutes) * 60 + Number(hours) * 3600;
	return seconds;
}

const ScheduleWidget = (props: {
	current_schedule: ReceivedSchedule;
	current_schedule_name: string;
}) => {
	useEffect(() => {
		const id = setInterval(() => {
			const ctime = new Date();
			const locale_time_string = ctime.toLocaleTimeString("en-US");
			const current_seconds = timeToSeconds(locale_time_string);

			console.log("Current seconds", current_seconds);
		}, 1000);
		return () => clearInterval(id);
	}, []);
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

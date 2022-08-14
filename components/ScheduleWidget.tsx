import styles from "../styles/ScheduleWidget.module.css";
import { GradientPill, GradientShadow } from "./Gradient";
import { ReceivedSchedule } from "../types/db_types";
import { useEffect, useState } from "react";

interface TimeUnits {
	hours: number;
	minutes: number;
	seconds: number;
}

function timeToSeconds(time: string) {
	let [shours, sminutes, sseconds, half] = time.split(/[\:\ ]/);
	let hours = Number(shours);

	if (half == "PM" && hours != 12) {
		hours = Number(hours) + 12;
	} else if (half == "AM" && hours == 12) {
		hours = 0;
	}

	let minutes = Number(sminutes);
	let seconds = Number(sseconds);

	seconds = Number(seconds) + Number(minutes) * 60 + Number(hours) * 3600;
	return seconds;
}

function secondsToUnits(s: number): TimeUnits {
	const hours = Math.floor(s / 3600);
	let left = Number(s % 3600);
	const minutes = Math.floor(left / 60);
	const seconds = left % 60;
	return { hours, minutes, seconds };
}

function getCurrentTimeInLocaleTimeString() {
	const ctime = new Date();
	const locale_time_string = ctime.toLocaleTimeString("en-US", {
		timeZone: "US/Eastern", // Use the current time in NYC (Stuy)
	});
	return locale_time_string;
}

function getCurrentTimeInUnits() {
	const locale_time_string = getCurrentTimeInLocaleTimeString();
	const current_seconds = timeToSeconds(locale_time_string);

	return secondsToUnits(current_seconds);
}

function formatTimeUnits(units: TimeUnits): string {
	const filler_date = new Date(
		2018,
		11,
		24,
		units.hours,
		units.minutes,
		units.seconds,
		0
	);

	return filler_date.toLocaleTimeString("en-US", {
		timeZone: "UTC", // Timezone UTC because the units are already in EST time
	});
}

const ScheduleWidget = (props: {
	current_schedule: ReceivedSchedule;
	current_schedule_name: string;
}) => {
	const [units, setUnits] = useState<TimeUnits>();

	useEffect(() => {
		const id = setInterval(() => {
			const current_units = getCurrentTimeInUnits();
			setUnits(current_units);
		}, 1000);
		return () => clearInterval(id);
	}, []);
	return (
		<div id={styles.container}>
			<GradientPill
				title={props.current_schedule_name}
				id={styles.schedule_type}
			/>
			<GradientPill
				title={units ? formatTimeUnits(units) : "XX:XX:XX PM"}
				id={styles.current_time}
			/>
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

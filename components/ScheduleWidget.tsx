import styles from "../styles/ScheduleWidget.module.css";
import { GradientPill, GradientPillCore, GradientShadow } from "./Gradient";
import { ReceivedSchedule } from "../types/db_types";
import { useEffect, useState } from "react";

interface TimeUnits {
	hours: number;
	minutes: number;
	seconds: number;
}
interface TimeState {
	units: TimeUnits;
	locale_time_string_main: string;
	locale_time_string_secondary: string;
	seconds: number;
	period_index: number;
	units_elapsed: TimeUnits;
	units_remaining: TimeUnits;
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

function get_current_period(
	current_seconds: number,
	schedule: ReceivedSchedule
) {
	for (let i = 0; i < schedule.segments.length; i++) {
		const period = schedule.segments[i];
		if (current_seconds < timeToSeconds(period.end)) {
			return i;
		}
	}
	return 0; // If not found (due to glitch), use first period
}

const ScheduleWidget = (props: {
	current_schedule: ReceivedSchedule;
	current_schedule_name: string;
}) => {
	const [allTimeInfo, setallTimeInfo] = useState<TimeState>();

	useEffect(() => {
		const id = setInterval(() => {
			const locale_time_string = getCurrentTimeInLocaleTimeString();
			const current_seconds = timeToSeconds(locale_time_string);
			const current_units = secondsToUnits(current_seconds);

			// Get current "place" in the schedule
			const period_index = get_current_period(
				current_seconds,
				props.current_schedule
			);

			const seconds_elapsed =
				current_seconds -
				timeToSeconds(
					props.current_schedule.segments[period_index].start
				);
			const seconds_remaining =
				timeToSeconds(
					props.current_schedule.segments[period_index].end
				) - current_seconds;

			const units_elapsed = secondsToUnits(seconds_elapsed);
			const units_remaining = secondsToUnits(seconds_remaining);

			setallTimeInfo({
				units: current_units,
				locale_time_string_main: locale_time_string.slice(0, -6),
				locale_time_string_secondary: locale_time_string.slice(-6, -3),
				seconds: current_seconds,
				period_index: period_index,
				units_elapsed: units_elapsed,
				units_remaining: units_remaining,
			});
		}, 1000);
		return () => clearInterval(id);
	}, [props.current_schedule]);
	return (
		<div id={styles.container}>
			<div id={styles.pills}>
			<GradientPillCore
				title={props.current_schedule_name}
				id={styles.schedule_type}
			/>
			<GradientPillCore
				title={
					allTimeInfo ?
						<span>{allTimeInfo.locale_time_string_main}
							<span className={styles.small}>
								{allTimeInfo.locale_time_string_secondary}
							</span>
						</span>
						: "XX:XX:XX"
				}
				id={styles.current_time}
			/>
			</div>
			<GradientShadow id={styles.schedule_widget}>
				<div className={styles.bottom}>
					<p>
						{allTimeInfo?.units_elapsed.hours ? (
							<>
								<span className={styles.highlight}>
									{allTimeInfo.units_elapsed.hours}
								</span>
								h{" "}
							</>
						) : (
							<></>
						)}
						<span className={styles.highlight}>
							{allTimeInfo
								? allTimeInfo.units_elapsed.minutes
								: "XX"}
						</span>
						m passed
					</p>
				</div>
				<h1 id={styles.current_period}>
					{allTimeInfo
						? props.current_schedule.segments[
								allTimeInfo.period_index
						  ].name
						: "Period X"}
				</h1>
				<div className={styles.bottom}>
					<p>
						{allTimeInfo?.units_remaining.hours ? (
							<>
								<span className={styles.highlight}>
									{allTimeInfo.units_remaining.hours}
								</span>
								h{" "}
							</>
						) : (
							<></>
						)}
						<span className={styles.highlight}>
							{allTimeInfo
								? allTimeInfo.units_remaining.minutes
								: "XX"}
						</span>
						m left
					</p>
				</div>
			</GradientShadow>
		</div>
	);
};

export default ScheduleWidget;

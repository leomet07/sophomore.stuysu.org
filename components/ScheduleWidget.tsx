import styles from "../styles/ScheduleWidget.module.css";
import { GradientPillCore, GradientShadow } from "./Gradient";
import { useEffect, useState } from "react";
import {
	curSeconds,
	get_current_period,
	ParsedPeriod,
	secondsToTime, toStuyTimeString,
} from "../lib/periodHelpers";

export interface TimeState {
	locale_time_string_main: string;
	locale_time_string_secondary: string;
	period_index: number;
	elapsed: Date;
	remaining: Date;
}

const ScheduleWidget = (props: {
	parsed_schedule: ParsedPeriod[];
	current_schedule_name: string;
}) => {
	const [allTimeInfo, setallTimeInfo] = useState<TimeState>();

	useEffect(() => {
		const id = setInterval(() => {
			const locale_time_string = toStuyTimeString(new Date(), "medium");
			const current_seconds = curSeconds();

			const period_index = get_current_period(props.parsed_schedule);

			const elapsed = secondsToTime(
				current_seconds - props.parsed_schedule[period_index].startSeconds
			);
			const remaining = secondsToTime(
				props.parsed_schedule[period_index].endSeconds - current_seconds
			);

			setallTimeInfo({
				locale_time_string_main: locale_time_string.slice(0, -6),
				locale_time_string_secondary: locale_time_string.slice(-6, -3),
				period_index: period_index,
				elapsed,
				remaining,
			});
		}, 1000);
		return () => clearInterval(id);
	}, [props.parsed_schedule]);
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
						{allTimeInfo?.elapsed.getHours() ? (
							<>
								<span className={styles.highlight}>
									{allTimeInfo.elapsed.getHours()}
								</span>
								h{" "}
							</>
						) : (
							<></>
						)}
						<span className={styles.highlight}>
							{allTimeInfo
								? allTimeInfo.elapsed.getMinutes()
								: "XX"}
						</span>
						m passed
					</p>
				</div>
				<h1 id={styles.current_period}>
					{allTimeInfo
						? props.parsed_schedule[
								allTimeInfo.period_index
						  ].name
						: "Period X"}
				</h1>
				<div className={styles.bottom}>
					<p>
						{allTimeInfo?.remaining.getHours() ? (
							<>
								<span className={styles.highlight}>
									{allTimeInfo.remaining.getHours()}
								</span>
								h{" "}
							</>
						) : (
							<></>
						)}
						<span className={styles.highlight}>
							{allTimeInfo
								? allTimeInfo.remaining.getMinutes()
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

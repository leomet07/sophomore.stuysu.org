/* eslint-disable react-hooks/exhaustive-deps */

import styles from "../styles/BellSchedule.module.css";
import { useState, useEffect, Key } from "react";
import { GradientPill } from "./Gradient";
import { get_current_period, ParsedPeriod } from "../lib/periodHelpers";

const BellSchedule = (props: { parsed_schedule: ParsedPeriod[] }) => {
	// Remove passing periods
	const display_schedule = props.parsed_schedule.filter(
		(v) => !v.name.includes("Passing")
	);

	const curPeriod: string = props.parsed_schedule[
		get_current_period(props.parsed_schedule)
	].name;

	const [width, setWidth] = useState(0);

	useEffect(() => {
		const updateDimensions = () => {
			if (window.innerWidth <= 1130) {
				setVisibility(false);
			}
			setWidth(window.innerWidth);
		};
		setWidth(window.innerWidth);
		if (window.innerWidth <= 1130 && visibility) {
			setVisibility(false);
		}
		window.addEventListener("resize", updateDimensions);

		return () => window.removeEventListener("resize", updateDimensions);
	}, []);

	const [visibility, setVisibility] = useState(true);
	const handleOnClick = () => {
		if (width <= 1130) {
			setVisibility(!visibility); // Only toggle visibility on mobile screens
		}
	};

	if (width > 1130 && !visibility) {
		setVisibility(true);
	}

	return (
		<div className={visibility ? "" : styles.hidden}>
			<div id={styles.bell_schedule_parent}>
				<GradientPill
					title="Bell Schedule"
					id={styles.label}
					onClick={handleOnClick}
				/>
				{visibility ? (
					<div id={styles.bell_schedule}>
						<div id={styles.schedule_container}>
							<div id={styles.right}>
								{display_schedule
									.splice(
										0,
										Math.floor(display_schedule.length / 2)
									)
									.map((schedule) => (
										<p key={schedule.name as Key}>
											<span className={schedule.name === curPeriod ? styles.cur_period : undefined}>
												<span className={styles.highlight}>
													{schedule.name}
												</span>
												<span className={styles.time}>
													{`${schedule.name !== "Before School" ? schedule.startString + " -" : "Before"} ${schedule.endString}`}
												</span>
											</span>
										</p>
									))}
							</div>
							<div id={styles.divider}/>
							<div id={styles.left}>
								{display_schedule.map((schedule) => (
									<p key={schedule.name as Key}>
										<span className={schedule.name === curPeriod ? styles.cur_period : undefined}>
											<span className={styles.highlight}>
												{schedule.name}
											</span>
											<span className={styles.time}>
												{schedule.name !== "After School" ?
													`${schedule.startString} - ${schedule.endString}`
													: `After ${schedule.startString}`
												}
											</span>
										</span>
									</p>
								))}
							</div>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default BellSchedule;

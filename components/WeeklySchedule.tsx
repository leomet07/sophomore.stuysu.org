/* eslint-disable react-hooks/exhaustive-deps */

import styles from "../styles/WeeklySchedule.module.css";
import { useState, useEffect } from "react";
import { GradientPill } from "./Gradient";
import { ReceivedDay } from "../types/db_types";
const WeeklySchedule = (props: { week_schedule_infos: ReceivedDay[] }) => {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		const updateDimensions = () => {
			setWidth(window.innerWidth);
			if (window.innerWidth <= 1130) {
				setVisibility(false);
			}
		};
		setWidth(window.innerWidth);
		if (window.innerWidth <= 1130 && visibility) {
			setVisibility(false);
		}
		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);
	if (typeof window !== "undefined") {
	}

	const [visibility, setVisibility] = useState(true);
	const handleOnClick = () => {
		if (width <= 1130) {
			setVisibility(!visibility); // Only toggle visiblity on mobile screens
		}
	};

	if (width > 1130 && !visibility) {
		setVisibility(true);
	}
	return (
		<div className={visibility ? "" : styles.hidden}>
			<div id={styles.weekly_schedule_parent}>
				<GradientPill
					title="This Week @ Stuy"
					id={styles.label}
					onClick={handleOnClick}
				/>
				{visibility ? (
					<div id={styles.weekly_schedule_box}>
						<div id={styles.weekly_schedule}>
							<p>
								Monday{" "}
								<span className={styles.highlight}>
									{
										props.week_schedule_infos[0]
											.bell_schedule_type
									}
								</span>
							</p>
							<p>
								Tuesday{" "}
								<span className={styles.highlight}>
									{
										props.week_schedule_infos[1]
											.bell_schedule_type
									}
								</span>
							</p>
							<p>
								Wensday{" "}
								<span className={styles.highlight}>
									{
										props.week_schedule_infos[2]
											.bell_schedule_type
									}
								</span>
							</p>
							<p>
								Thursday{" "}
								<span className={styles.highlight}>
									{
										props.week_schedule_infos[3]
											.bell_schedule_type
									}
								</span>
							</p>
							<p>
								Friday{" "}
								<span className={styles.highlight}>
									{
										props.week_schedule_infos[4]
											.bell_schedule_type
									}
								</span>
							</p>
						</div>
						<div id={styles.special_news_container}>
							<p>No special news</p>
						</div>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default WeeklySchedule;

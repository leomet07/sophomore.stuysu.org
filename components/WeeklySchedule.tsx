import styles from "../styles/WeeklySchedule.module.css";
import { useState, useEffect } from "react";

const WeeklySchedule = () => {
	const [width, setWidth] = useState(0);

	useEffect(() => {
		const updateDimensions = () => {
			setWidth(window.innerWidth);
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
				<div id={styles.label} onClick={handleOnClick}>
					<span>This Week @ Stuy</span>
				</div>
				{visibility ? (
					<div id={styles.weekly_schedule_box}>
						<div id={styles.weekly_schedule}>
							<p>
								Monday{" "}
								<span className={styles.highlight}>
									Regular
								</span>
							</p>
							<p>
								Tuesday{" "}
								<span className={styles.highlight}>
									Regular
								</span>
							</p>
							<p>
								Wensday{" "}
								<span className={styles.highlight}>
									Regular
								</span>
							</p>
							<p>
								Thursday{" "}
								<span className={styles.highlight}>
									Regular
								</span>
							</p>
							<p>
								Friday{" "}
								<span className={styles.highlight}>
									Regular
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

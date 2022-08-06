import styles from "../styles/BellSchedule.module.css";
import { useState, useEffect } from "react";

const BellSchedule = () => {
	const [width, setWidth] = useState(0);
	const updateDimensions = () => {
		setWidth(window.innerWidth);
	};
	useEffect(() => {
		setWidth(window.innerWidth);
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
			<div id={styles.bell_schedule_parent}>
				<div id={styles.label} onClick={handleOnClick}>
					<span>Bell Schedule</span>
				</div>
				{visibility ? (
					<div id={styles.bell_schedule}>
						<div id={styles.schedule_container}>
							<div id={styles.right}>
								<p>
									<span className={styles.highlight}>
										Before school
									</span>
									&nbsp;Up to 8:00
								</p>
								<p>
									<span className={styles.highlight}>
										Period 1
									</span>
									&nbsp;8:00 to 8:49
								</p>
								<p>
									<span className={styles.highlight}>
										Period 2
									</span>
									&nbsp;8:00 to 8:49
								</p>
								<p>
									<span className={styles.highlight}>
										Period 3
									</span>
									&nbsp;8:00 to 8:49
								</p>
								<p>
									<span className={styles.highlight}>
										Period 4
									</span>
									&nbsp;8:00 to 8:49
								</p>
								<p>
									<span className={styles.highlight}>
										Period 5
									</span>
									&nbsp;8:00 to 8:49
								</p>
							</div>

							<div id={styles.left}>
								<p>
									<span className={styles.highlight}>
										Period 6
									</span>
									&nbsp;8:00 to 8:49
								</p>
								<p>
									<span className={styles.highlight}>
										Period 7
									</span>
									&nbsp;8:00 to 8:49
								</p>
								<p>
									<span className={styles.highlight}>
										Period 8
									</span>
									&nbsp;8:00 to 8:49
								</p>
								<p>
									<span className={styles.highlight}>
										Period 9
									</span>
									&nbsp;8:00 to 8:49
								</p>
								<p>
									<span className={styles.highlight}>
										Period 10
									</span>
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
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default BellSchedule;

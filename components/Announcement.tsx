import styles from "../styles/Announcement.module.css";

const Announcement = (props: { text: string; date: string }) => {
	return (
		<div className={styles.announcement}>
			<h1 className={styles.date}>{props.date}</h1>
			<p className={styles.text}>{props.text}</p>
		</div>
	);
};

export default Announcement;

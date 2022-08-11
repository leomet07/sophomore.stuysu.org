import styles from "../styles/Profile.module.css";
import Image from "next/image";
import { ReactNode } from "react";

const Profile = (props: {
	imgSrc: string;
	imgAlt: string;
	children: ReactNode;
	name: string;
}) => {
	/*
	 * imgSrc: URI to an image (of 1:1 aspect ratio) representing the profile
	 * imgAlt: Alt text describing the image (for screen-readers)
	 * children: React children elements composed of <p> tags for the profile's description
	 */
	return (
		<div className={styles.profile}>
			<div className={styles.image}>
				<Image src={props.imgSrc} alt={props.imgAlt} layout="fill" />
			</div>
			<div className={styles.profile_info}>
				<h1 className={styles.profile_name}>{props.name}</h1>
				<div className={styles.description}> {props.children} </div>
			</div>
		</div>
	);
};

const Director = (props: {
	imgSrc: string;
	imgAlt: string;
	description: string;
	name: string;
}) => {
	/*
	 * Subclass/Wrapper around <Profile> to apply specific Director card styling
	 *
	 * imgSrc: URI to an image (of 1:1 aspect ratio) representing the profile
	 * imgAlt: Alt text describing the image (for screen-readers)
	 * description: A short string with a quote or other subtitle
	 */
	return (
		<div className={styles.director}>
			<Profile
				imgSrc={props.imgSrc}
				imgAlt={props.imgAlt}
				name={props.name}
			>
				<p> {props.description} </p>
			</Profile>
		</div>
	);
};

export { Profile, Director };

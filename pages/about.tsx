import Head from "next/head";
import { Profile, Director } from "../components/Profile";
import styles from "../styles/About.module.css";
import getServerUrl from "../lib/getServerUrl";
import { ReceivedProfile } from "../types/db_types";
import {GetServerSidePropsContext} from "next";
import type { InferGetServerSidePropsType } from "next";
import {Key} from "react";

const About = (
	props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
	const presidents = props.profiles.filter((profile) => profile.president);
	const directors = props.profiles.filter((profile) => !profile.president);
	let line_key = 0;   // counter for mapping out keys for the <p> tags in President profiles
	console.log(presidents, directors)
	return (
		<>
			<Head>
				<title>About the Sophomore Caucus</title>
				<meta
					name="description"
					content="About the Sophomore Caucus"
				/>
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>ABOUT US</h1>
				<div className={styles.presidents}>
					{
						presidents.map((president) => (
							<Profile key={president._id as Key} imgSrc={president.imgSrc} imgAlt={president.imgAlt} >
								{
									// Split president descriptions by newlines to delimit new paragraphs
									president.description.split('\n').map((line) => (
									<p key={++line_key as Key}> {line}</p>
								))}
							</Profile>
						))}
				</div>
				<div className={styles.directors}>
					{directors.map((director) => (
						<Director key={director._id as Key} imgSrc={director.imgSrc} imgAlt={director.imgAlt} description={director.description} />
					))}
				</div>
			</main>
		</>
	)
}

type ProfilesResponse = {
	success: boolean;
	data: ReceivedProfile[];
	serverUrl: string;
}

export const getServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const r: any = await fetch(getServerUrl() + "/api/profiles");
	const data: ProfilesResponse = await r.json();
	return { props: { profiles: data.data, serverUrl: getServerUrl() } };
}


export default About;
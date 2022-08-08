import type { GetServerSidePropsContext } from "next";
import Head from "next/head";
import styles from "../styles/Policies.module.css";

import { ReceivedPolicy } from "../types/db_types";
import getServerUrl from "../lib/getServerUrl";
import { InferGetServerSidePropsType } from "next";
import { Key } from "react";

const Policies = (
	props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
	return (
		<>
			<Head>
				<title>Policies</title>
				<meta
					name="description"
					content="The Sophomore Caucus policies"
				/>
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>OUR POLICIES</h1>
				{props.policies.map((v) => (
					<div key={v._id as Key} className={styles.policy}>
						<h1>{v.name}</h1>
						<p>
							<span className={styles.highlight}>Catagory:</span>
							&nbsp;
							{v.category}
						</p>
						<p>
							<span className={styles.highlight}>
								Description:
							</span>{" "}
							{v.description}
						</p>
						<p>
							<span className={styles.highlight}>How?</span>
							&nbsp;
							{v.how
								? v.how
								: `Policy "how" field not specified.`}
						</p>
						<p>
							<span className={styles.highlight}>Why?</span>
							&nbsp;
							{v.why
								? v.why
								: `Policy "why" field not specified.`}
						</p>
					</div>
				))}
			</main>
		</>
	);
};

type getPoliciesResponse = {
	success: boolean;
	data: ReceivedPolicy[];
	serverUrl: string;
};

export const getServerSideProps = async (
	context: GetServerSidePropsContext
) => {
	const r: any = await fetch(getServerUrl() + "/api/get_policies");
	const data: getPoliciesResponse = await r.json();
	return { props: { policies: data.data, serverUrl: getServerUrl() } };
};

export default Policies;

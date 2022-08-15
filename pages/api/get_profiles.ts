import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import Profile from "../../models/Profile";
import { ReceivedProfile } from "../../types/db_types";

type ResponseData = {
	success: boolean;
	data?: ReceivedProfile | ReceivedProfile[];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case "GET":
			try {
				let db_profiles = (await Profile.find({})) as ReceivedProfile[];

				db_profiles = db_profiles.sort((a, b) => a.index - b.index);

				res.status(200).json({ success: true, data: db_profiles });
				break;
			} catch (error) {
				console.error(error);
			}
		/* fallthrough on error */
		default:
			res.status(400).json({ success: false });
			break;
	}
}

import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import Policy from "../../models/Policy";
import { ReceivedPolicy } from "../../types/db_types";

type ResponseData = {
	success: boolean;
	data?: ReceivedPolicy[];
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
				let db_policies = (await Policy.find({})) as ReceivedPolicy[];

				res.status(200).json({ success: true, data: db_policies });
			} catch (error) {
				console.error(error);
				res.status(400).json({ success: false });
			}
			break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}

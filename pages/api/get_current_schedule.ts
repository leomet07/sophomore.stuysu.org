import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import Schedule from "../../models/Schedule";

type ReponseData = {
	success: boolean;
	current_schedule?: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ReponseData>
) {
	const { method } = req;

	await dbConnect();

	const current_date = new Date(Date.now()).toLocaleDateString("en-US", {
		timeZone: "US/Eastern",
	});

	switch (method) {
		case "GET":
			try {
				res.status(200).json({
					success: true,
					current_schedule: "Homeroom",
				});
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

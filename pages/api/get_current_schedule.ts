import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import get_bell_schedule_by_date from "../../lib/get_bell_schedule_by_date";

type ResponseData = {
	success: boolean;
	current_schedule?: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ResponseData>
) {
	const { method } = req;

	await dbConnect();

	const current_date = new Date(Date.now()).toLocaleDateString("en-US", {
		timeZone: "US/Eastern",
	});

	switch (method) {
		case "GET":
			try {
				const attempted_search = await get_bell_schedule_by_date(
					current_date
				);

				res.status(200).json({
					success: true,
					current_schedule: attempted_search,
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

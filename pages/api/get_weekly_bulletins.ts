import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import WeeklyBulletin from "../../models/WeeklyBulletin";
import { ReceivedWeeklyBulletin } from "../../types/db_types";

type ResponseData = {
	success: boolean;
	data?: ReceivedWeeklyBulletin[];
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
				let db_weekly_bulletins = (await WeeklyBulletin.find(
					{}
				)) as ReceivedWeeklyBulletin[];

				res.status(200).json({
					success: true,
					data: db_weekly_bulletins,
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

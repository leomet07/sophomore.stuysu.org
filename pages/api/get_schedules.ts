import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import Schedule from "../../models/Schedule";
import { ReceivedSchedule } from "../../types/db_types";

type ResponseData = {
	success: boolean;
	data?: ReceivedSchedule[];
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
				let db_schedules = (await Schedule.find(
					{}
				)) as ReceivedSchedule[];

				res.status(200).json({ success: true, data: db_schedules });
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

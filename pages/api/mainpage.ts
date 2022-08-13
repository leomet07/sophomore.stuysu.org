import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import Schedule from "../../models/Schedule";
import Announcement from "../../models/Announcement";
import { ReceivedSchedule, ReceivedAnnouncement } from "../../types/db_types";

type ReponseData = {
	success: boolean;
	schedules?: ReceivedSchedule[];
	announcements?: ReceivedAnnouncement[];
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
				let db_schedules = (await Schedule.find(
					{}
				)) as ReceivedSchedule[];

				let db_announcements = (await Announcement.find(
					{}
				)) as ReceivedAnnouncement[];

				res.status(200).json({
					success: true,
					schedules: db_schedules,
					announcements: db_announcements,
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

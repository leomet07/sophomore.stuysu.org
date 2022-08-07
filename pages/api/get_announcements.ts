import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import Announcement from "../../models/Announcement";
import { ReceivedAnnouncement } from "../../types/db_types";

type ReponseData = {
	success: boolean;
	data?: ReceivedAnnouncement | ReceivedAnnouncement[];
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ReponseData>
) {
	const { method } = req;

	await dbConnect();

	switch (method) {
		case "GET":
			try {
				const announcements = (await Announcement.find(
					{}
				)) as ReceivedAnnouncement[];

				res.status(200).json({ success: true, data: announcements });
			} catch (error) {
				console.error(error);
				res.status(400).json({ success: false });
			}
			break;
		// case "POST":
		// 	try {
		// 		const announcement = (await Announcement.create(
		// 			req.body
		// 		)) as ReceivedAnnouncement;
		// 		res.status(201).json({ success: true, data: announcement });
		// 	} catch (error) {
		// 		res.status(400).json({ success: false });
		// 	}
		// 	break;
		default:
			res.status(400).json({ success: false });
			break;
	}
}

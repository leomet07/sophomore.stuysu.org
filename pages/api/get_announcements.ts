import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import Announcement from "../../models/Announcement";
import { ReceivedAnnouncement } from "../../types/db_types";
import { Types } from "mongoose";

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
				let db_announcements = (await Announcement.find({})) as any[];

				let announcements = db_announcements.map((v) => {
					const objid = new Types.ObjectId(v._id);
					const rdate = objid.getTimestamp();

					let newv = v.toObject();
					newv.date = rdate;

					return newv;
				}) as ReceivedAnnouncement[];

				res.status(200).json({ success: true, data: announcements });
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

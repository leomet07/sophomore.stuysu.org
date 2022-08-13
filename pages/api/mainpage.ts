import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../lib/dbConnect";
import Schedule from "../../models/Schedule";
import Announcement from "../../models/Announcement";
import {
	ReceivedSchedule,
	ReceivedAnnouncement,
	ReceivedDay,
} from "../../types/db_types";
import get_bell_schedule_by_date from "../../lib/get_bell_schedule_by_date";

type ReponseData = {
	success: boolean;
	schedules?: ReceivedSchedule[];
	announcements?: ReceivedAnnouncement[];
	current_schedule?: string;
	week_schedule_infos?: ReceivedDay[];
};

function get_week(start: string) {
	const dates = [start];
	let m = new Date(start);
	for (let i = 0; i < 4; i++) {
		m.setDate(m.getDate() + 1); // JS will auto update month and year
		dates.push(m.toLocaleDateString("en-US"));
	}
	return dates;
}

function get_first_day(start_date: string) {
	const m = new Date(start_date);

	while (m.getDay() > 1) {
		m.setDate(m.getDate() - 1);
	}
	if (m.getDay() == 0) {
		m.setDate(m.getDate() + 1);
	}
	return m.toLocaleDateString("en-US");
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ReponseData>
) {
	const { method } = req;

	await dbConnect();

	const today = new Date(Date.now()).toLocaleDateString("en-US", {
		timeZone: "US/Eastern",
	});
	const today_schedule = await get_bell_schedule_by_date(today);
	console.log("Today schedule: ", today_schedule);

	const start_date = get_first_day(today);
	const week_dates = get_week(start_date);

	const week_schedule_infos: ReceivedDay[] = [];
	for (let i = 0; i < week_dates.length; i++) {
		const current_week_date = week_dates[i];
		const current_week_date_schedule = await get_bell_schedule_by_date(
			current_week_date
		);
		week_schedule_infos.push({
			date: current_week_date,
			bell_schedule_type: current_week_date_schedule,
		});
	}

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
					current_schedule: today_schedule,
					week_schedule_infos: week_schedule_infos,
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

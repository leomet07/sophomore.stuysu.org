import Day from "../models/Day";
import { ReceivedDay } from "../types/db_types";

async function get_bell_schedule_by_date(date: string) {
	return (
			(await Day.findOne({
				date: date,
			})) as ReceivedDay
		)?.bell_schedule_type || "Regular";
}

export default get_bell_schedule_by_date;

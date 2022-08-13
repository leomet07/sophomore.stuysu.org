import Day from "../models/Day";
import { ReceivedDay } from "../types/db_types";

async function get_bell_schedule_by_date(date: string) {
	const attempted_search: string =
		(
			(await Day.findOne({
				date: date,
			})) as ReceivedDay
		)?.bell_schedule_type || "Regular";

	return attempted_search;
}

export default get_bell_schedule_by_date;

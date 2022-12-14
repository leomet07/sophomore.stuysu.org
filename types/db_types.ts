import { Types } from "mongoose";

export type mongoObjectId = Types.ObjectId | string;
export interface ReceivedAnnouncement {
	_id: mongoObjectId;
	title: string;
	date: Date | string;
}
export interface ReceivedProfile {
	_id: mongoObjectId;
	imgSrc: string;
	imgAlt: string;
	description: string;
	president: boolean;
	name: string;
	pronouns: string;
	role: string;
	index: number;
}
export interface ReceivedPolicy {
	_id: mongoObjectId;
	name: string;
	description: string;
	category: string;
	why?: string;
	how?: string;
}

export interface ReceivedSchedule {
	_id: mongoObjectId;
	name: string;
	segments: ScheduleSegment[];
}
export interface ScheduleSegment {
	start: string;
	end: string;
	name: string;
}

export interface ReceivedDay {
	_id?: mongoObjectId;
	date: string;
	bell_schedule_type: string;
}

export interface ReceivedWeeklyBulletin {
	_id: mongoObjectId;
	week_start: string;
	url: string;
	highlights: string[];
}

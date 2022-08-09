import { Types } from "mongoose";

export type mongoObjectId = Types.ObjectId | string;
export interface ReceivedAnnouncement {
	_id: mongoObjectId;
	title: string;
	date: Date | string;
}
export interface ReceivedProfile {
	_id: mongoObjectId;
	imgSrc: string,
	imgAlt: string,
	description: string,
	president: boolean
}

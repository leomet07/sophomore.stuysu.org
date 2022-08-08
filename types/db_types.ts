import { Types } from "mongoose";

export type mongoObjectId = Types.ObjectId | string;
export interface ReceivedAnnouncement {
	_id: mongoObjectId;
	title: string;
	date: Date | string;
}
export interface ReceivedPolicy {
	_id: mongoObjectId;
	name: string;
	description: string;
	category: string;
	why?: string;
	how?: string;
}

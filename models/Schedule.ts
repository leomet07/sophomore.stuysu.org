import mongoose from "mongoose";

const ScheduleSchema = new mongoose.Schema({
	name: String,
	segments: [
		{
			name: String,
			start: String,
			end: String,
		},
	],
});

const ScheduleModel =
	mongoose.models.Schedule || mongoose.model("Schedule", ScheduleSchema);

export default ScheduleModel;

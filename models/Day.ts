import mongoose from "mongoose";

const daySchema = new mongoose.Schema({
	date: {
		type: String,
		required: true,
	},
	bell_schedule_type: {
		type: String,
		required: true,
	},
});

const dayModel = mongoose.models.Day || mongoose.model("Day", daySchema);

export default dayModel;

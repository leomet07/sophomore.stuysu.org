import mongoose from "mongoose";

const WeeklyBulletinSchema = new mongoose.Schema({
	week_start: String,
	url: String,
	highlights: [String],
});
const WeeklyBulletinModel =
	mongoose.models.WeeklyBulletin ||
	mongoose.model("WeeklyBulletin", WeeklyBulletinSchema);

export default WeeklyBulletinModel;

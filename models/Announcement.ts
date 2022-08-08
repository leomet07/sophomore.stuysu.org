import mongoose from "mongoose";

const AnnouncementSchema = new mongoose.Schema({
	title: String,
});
const AnnouncementModel =
	mongoose.models.Announcement ||
	mongoose.model("Announcement", AnnouncementSchema);

export default AnnouncementModel;

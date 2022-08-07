import mongoose from "mongoose";

const AnnouncementSchema = new mongoose.Schema({
	title: String,
});

export default mongoose.models.Announcement ||
	mongoose.model("announcement", AnnouncementSchema);

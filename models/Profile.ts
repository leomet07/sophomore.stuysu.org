import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
	imgSrc: String,
	imgAlt: String,
	description: String,
	president: Boolean,
	name: String,
	pronouns: String,
	role: String,
	index: Number,
});
const ProfileModel =
	mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);

export default ProfileModel;

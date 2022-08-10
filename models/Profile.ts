import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    imgSrc: String,
    imgAlt: String,
    description: String,
    president: Boolean,
});
const ProfileModel =
    mongoose.models.Profile ||
    mongoose.model("Profile", ProfileSchema);

export default ProfileModel;

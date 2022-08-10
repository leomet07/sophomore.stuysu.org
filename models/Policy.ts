import mongoose from "mongoose";

const policySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	why: {
		type: String,
	},
	how: {
		type: String,
	},
});

const policyModel =
	mongoose.models.Policy || mongoose.model("Policy", policySchema);

export default policyModel;

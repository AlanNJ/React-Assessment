import { models, Schema, model } from "mongoose";

const userSchema = new Schema({
	email: {
		type: String,
	},
	password: {
		type: String,
	},
	userId: {
		type: Schema.Types.ObjectId,
	},
});

const User = models.User || model("User", userSchema);
export default User;

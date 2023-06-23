import { models, Schema, model } from "mongoose";

const resturantSchema = new Schema({
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	image: {
		type: String,
	},
	address: {
		type: String,
	},
	reviews: {
		type: [String],
		default: [],
	},
});

const Resturant = models.Resturant || model("Resturant", resturantSchema);
export default Resturant;

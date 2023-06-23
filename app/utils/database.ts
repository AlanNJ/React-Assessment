import mongoose, { ConnectOptions } from "mongoose";
let isConnected = false;

const connectToDb = async () => {
	mongoose.set("strictQuery", true);
	console.log("jjj");
	if (isConnected) {
		console.log("Database is already connected");
		return;
	}
	try {
		await mongoose
			.connect(
				"mongodb+srv://alan:alan@cluster0.rpehjo9.mongodb.net/?retryWrites=true&w=majority"
				// {
				// 	dbName: "student_info_v2",
				// 	useNewUrlParser: true,
				// 	useUnifiedTopology: true,
				// } as ConnectOptions
			)
			.then(() => console.log("mongodb connected"));
		isConnected = true;
	} catch (err) {
		console.log("err");
		console.log(err);
	}
};
export default connectToDb;

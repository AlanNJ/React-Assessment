import { NextApiRequest, NextApiResponse } from "next";
import bodyParser from "body-parser";
import Resturant from "../../models/Resturants";
import connectToDb from "@/app/utils/database";
export const config = {
	api: {
		bodyParser: true, // Disable the default body parsing
	},
};

export const POST = async (req: any, res: NextApiResponse) => {
	try {
		const { name, image, description, address, reviews } = await req.json();
		await connectToDb();
		let resturant = new Resturant({
			image,
			name,
			description,
			address,
			reviews,
		});
		await resturant.save();
		return new Response(JSON.stringify({ resturant, success: true }), {
			status: 201,
		});
	} catch (err) {
		console.log(err);
	}
};
export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
	// await jsonParser(req, res, () => console.log("hello")); // Parse the request body
	try {
		await connectToDb();
		let resturant = await Resturant.find();
		console.log(resturant);
		return new Response(JSON.stringify({ resturant, success: true }), {
			status: 201,
		});
	} catch (err) {
		console.log(err);
	}
};

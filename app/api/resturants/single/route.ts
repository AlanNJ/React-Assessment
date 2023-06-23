import { NextApiRequest, NextApiResponse } from "next";
import Resturant from "../../models/Resturants";
import connectToDb from "@/app/utils/database";

export const POST = async (req: any, res: NextApiResponse) => {
	try {
		// Find the resturant by ID
		let { _id, review } = await req.json();
		console.log(_id);
		await connectToDb();
		const resturant = await Resturant.findById(_id);
		if (!resturant) {
			throw new Error("Resturant not found");
		}

		// Add the review to the reviews list
		resturant.reviews.push(review);

		// Save the updated resturant
		await resturant.save();

		return new Response(JSON.stringify({ resturant, success: true }), {
			status: 201,
		});
	} catch (error) {
		// Handle errors
		console.error(error);
		throw error;
	}
};
export const GET = async (req: any, res: NextApiResponse) => {
	try {
		// Find the resturant by ID
		let { id } = req.query;
		console.log(id);
		await connectToDb();
		const resturant = await Resturant.findById(id);
		if (!resturant) {
			throw new Error("Resturant not found");
		}

		// Add the review to the reviews list

		// Save the updated resturant

		return new Response(JSON.stringify({ resturant, success: true }), {
			status: 201,
		});
	} catch (error) {
		// Handle errors
		console.error(error);
		throw error;
	}
};

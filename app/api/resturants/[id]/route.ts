import connectToDb from "@/app/utils/database";
import { NextApiResponse } from "next";
import Resturant from "../../models/Resturants";

export const GET = async (req: any, { params }: any) => {
	try {
		// Find the resturant by ID
		let { id } = params;
		console.log(id);
		await connectToDb();
		const resturant = await Resturant.findById(id);
		if (!resturant) {
			console.log("nothing found");
		}

		// Add the review to the reviews list

		// Save the updated resturant

		return new Response(JSON.stringify({ resturant, success: true, id }), {
			status: 201,
		});
	} catch (error) {
		// Handle errors
		console.error(error);
		throw error;
	}
};

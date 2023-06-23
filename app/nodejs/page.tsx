"use client";

import React, { useEffect, useState } from "react";
import ResturantCard from "../Components/UI/ResturantCard";
import { getAllResturants } from "../utils/resturant";
import { IResturant } from "@/libs/types";

const pages = () => {
	const [data, setData] = useState<IResturant[]>([]);
	useEffect(() => {
		let res = getAllResturants();
		res.then((item) => setData(item.resturant));
	}, []);

	return (
		<div className="w-full">
			<h1 className="text-3xl text-bolder text-orange-700 mx-auto text-center my-10">
				Featured Resturants Listings !!
			</h1>
			<div className="w-full flex flex-wrap gap-10 justify-center mt-10">
				{data.map((item) => (
					<ResturantCard item={item} key={item._id} />
				))}
			</div>
		</div>
	);
};

export default pages;
// export async function getServerSideProps() {
// 	const response = await axios.get("/api/resturants/new");
// 	const result = await response.data();

// 	// Return the result as props
// 	return {
// 		props: {
// 			result,
// 		},
// 	};
// }

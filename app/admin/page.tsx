"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { getAllResturants } from "../utils/resturant";
import { IResturant } from "@/libs/types";
import { useRouter } from "next/navigation";

const page = () => {
	const [data, setData] = useState<IResturant[]>([]);
	const router = useRouter();
	useLayoutEffect(() => {
		let present = localStorage.getItem("user");
		!present && router.push("/");
	});
	useEffect(() => {
		let res = getAllResturants();
		res.then((item) => setData(item.resturant));
	}, []);

	return (
		<div className="mt-10 w-[95%] lg:w-[80%] mx-auto max-w-[100vw] overflow-x-scroll">
			<table className="lg:flex-1 w-full divide-y divide-gray-200 ">
				<thead className="bg-gray-50 w-full">
					<tr>
						<th className="px-2 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							id
						</th>
						<th className="px-2 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Resturant
						</th>
						<th className="px-2 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Address
						</th>
						<th className="px-2 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Reviews
						</th>
					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200 w-full max-w-[100vw]">
					{data.map((item, id) => (
						<tr key={id}>
							<td className="px-2 lg:px-6 py-4 whitespace-nowrap">{id + 1}</td>
							<td className="px-2 lg:px-6 py-4 whitespace-nowrap">
								{item.name}
							</td>
							<td className="px-2 lg:px-6 py-4 whitespace-nowrap">
								{item.address}
							</td>
							<td className="px-2 lg:px-6 py-4 whitespace-nowrap">
								{item.reviews.length}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default page;

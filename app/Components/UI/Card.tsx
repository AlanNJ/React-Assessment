import React from "react";
import { TableData } from "@/libs/types";

interface CardProps {
	data: TableData;
}
const Card: React.FC<CardProps> = ({ data }) => {
	return (
		<div className="h-60 w-full md:w-[60%] lg:w-[30%] flex flex-col justify-center items-center gap-2 bg-white shadow-lg">
			<span>{data.name}</span>
			<span>{data.age}</span>
			<span>{data.occupation}</span>
			<div className=" mx-auto">
				{data == null && <h1 className="w-full mx-auto">No items to show</h1>}
			</div>
		</div>
	);
};

export default Card;

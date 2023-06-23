"use client";
import Image from "next/image";
import React from "react";
import BlurredInfoBox from "./BlurredInfoBox";
import MouseImage from "../../../public/images/mouse.png";
import { useRouter } from "next/navigation";
import { IResturant } from "@/libs/types";

interface ResturantProps {
	item: IResturant;
}
const ResturantCard = ({ item }: ResturantProps) => {
	const router = useRouter();
	return (
		<div
			className="w-[95%] max-h-[500px] shadow-lg hover:shadow-xl duration-300 hover:scale-105 rounded-lg pb-10 cursor-pointer  flex lg:w-1/6 lg:flex-col bg-white/100 "
			onClick={() => router.push(`/nodejs/resturant/${item._id}`)}
		>
			<div className="w-1/2 lg:w-full">
				<div className="relative bg-gray-400 py-5 ">
					<Image
						src={item.image}
						alt="product_image "
						width={700}
						height={700}
						quality={90}
						style={{
							objectFit: "contain",
							maxHeight: "400px",
							minHeight: "300px",
						}}
					/>
					<BlurredInfoBox />
				</div>
			</div>
			<div className="relative w-1/2 flex flex-col justify-center gap-3 items-center px-3 lg:w-full ">
				<span className="text-yellow-800 lg:text-2xl my-2 mt-5">*****</span>
				<span className="lg:text-center lg:px-5">{item.name}</span>
				<span className="absolute bottom-0 left-2 font-bold text-lg lg:-bottom-10">
					{item.reviews.length} reviews
				</span>
			</div>
		</div>
	);
};

export default ResturantCard;

import React from "react";
import {
	AiOutlineHeart,
	AiOutlineShoppingCart,
	AiOutlineShareAlt,
} from "react-icons/ai";

const BlurredInfoBox = () => {
	return (
		<div className="absolute bottom-1 rounded-md w-full bg-gray-200 shadow-lg flex justify-between lg:flex-col px-10 lg:px-0 lg:items-center  py-2 lg:py-8 lg:h-40 lg:w-10 lg:top-0 lg:-left-1 lg:rounded-full">
			<AiOutlineHeart className="hover:text-red-900 hover:scale-125 duration-300 cursor-pointer text-xl" />
			<AiOutlineShareAlt className="hover:text-red-900 hover:scale-125 duration-300 cursor-pointer text-xl" />
			<AiOutlineShoppingCart className="hover:text-red-900 hover:scale-125 duration-300 cursor-pointer text-xl" />
		</div>
	);
};

export default BlurredInfoBox;

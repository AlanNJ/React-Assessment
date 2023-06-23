import React from "react";
interface IComments {
	message: string;
}
const Comments = ({ message }: IComments) => {
	return (
		<div className="w-[97%] lg:w-4/5 py-3  flex flex-grow items-center gap-2 my-5">
			<div className="h-[2rem] w-[2rem] rounded-full bg-gray-500 lg:scale-105"></div>
			<div className="flex-1 bg-gray-200 shadow-md py-3 px-2 lg:px-5 w-full ">
				<span>{message}</span>
			</div>
		</div>
	);
};

export default Comments;

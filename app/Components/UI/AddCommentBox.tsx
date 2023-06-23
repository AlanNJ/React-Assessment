import { IAddComment } from "@/libs/types";
import React, { SetStateAction } from "react";

const AddCommentBox = ({ comment, setComment, addComment }: IAddComment) => {
	return (
		<div className="flex flex-col w-[70%] p-4 bg-white rounded shadow mx-auto">
			<div className="flex items-center mb-4">
				<div className="w-10 h-10 rounded-full bg-gray-200"></div>
				<span className="ml-2 font-semibold">John Doe</span>
			</div>
			<textarea
				className="w-full p-2 mb-4 bg-gray-100 border border-gray-300 rounded"
				placeholder="Write a comment"
				onChange={(e: any) => setComment(e.target.value)}
				value={comment}
			></textarea>
			<button
				className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded hover:bg-blue-600"
				onClick={() => addComment()}
			>
				Submit
			</button>
		</div>
	);
};

export default AddCommentBox;

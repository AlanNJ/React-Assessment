"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Comments from "@/app/Components/UI/Comments";
import AddCommentBox from "@/app/Components/UI/AddCommentBox";

import axios from "axios";

import { toast } from "react-toastify";
import { IResturant } from "@/libs/types";
const SinglePage = ({ params }: { params: { id: string } }) => {
	const [comment, setComment] = useState<string>("");
	let [currentResturant, setCurrentResturant] = useState<IResturant>();

	async function addComment() {
		let user = localStorage.getItem("user");
		if (!user) {
			toast.error("You must log in first");
			return;
		}
		if (comment == "") {
			toast.error("Please Write the review");
			return;
		}
		await axios.post("/api/resturants/single", {
			_id: params.id,
			review: comment,
		});
		toast.success("Review Added Successfully");
		setComment("");
		updater();
	}
	function updater() {
		axios
			.get(`/api/resturants/${params.id}`)
			.then((res) => setCurrentResturant(res.data.resturant));
	}
	useEffect(() => {
		updater();
	}, []);

	return (
		<div className="w-[90%] h-full flex flex-col-reverse lg:flex-row gap-10 mt-10 mx-auto">
			<div className="w-full lg:w-[50%] bg-white shadow-lg mr-5 h-full  ">
				{currentResturant && (
					<Image
						src={`${currentResturant?.image}`}
						alt="resturant"
						width={700}
						height={700}
						quality={90}
						style={{
							objectFit: "contain",
							maxHeight: "500px",
							minHeight: "400px",
						}}
					/>
				)}
				<div className="overflow-y-scroll max-h-[40vh] mt-10 mx-auto w-[95%] lg:w-[80%]">
					{currentResturant?.reviews.map((item) => (
						<Comments key={item} message={item} />
					))}
				</div>
				<hr className="mt-5" />
				<div className="mx-auto w-full">
					<AddCommentBox
						comment={comment}
						setComment={setComment}
						addComment={addComment}
					/>
				</div>
			</div>
			<div className="w-full lg:w-2/3 bg-white shadow-lg mr-5 max-h-[40vh] lg:max-h-[90vh] overflow-y-scroll lg:h-[90vh] px-10 ">
				<h1 className="text-2xl font-bold my-5">{currentResturant?.name}</h1>
				<h1 className="text-xl font-bold my-5">{currentResturant?.address}</h1>
				<h3 className="text-lg leading-10">{currentResturant?.description}</h3>
			</div>
		</div>
	);
};

export default SinglePage;

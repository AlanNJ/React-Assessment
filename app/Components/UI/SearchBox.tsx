"use client";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
interface searchProps {
	input: string;
	setInput: (i: string) => void;
	handleSearch: (i: string) => void;
}
const SearchBox = ({ input, setInput, handleSearch }: searchProps) => {
	function changeFilter(e: React.ChangeEvent<HTMLInputElement>) {
		let data = e.target.value;
		setInput(data);
		handleSearch(data);
	}
	return (
		<div className="mx-auto relative flex items-center w-[95%] gap-10 lg:mx-0 ">
			<input
				type="text"
				placeholder="Search"
				className="flex-1 pl-20  pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent lg:ml-10 bg-gray-200"
				value={input}
				onChange={changeFilter}
			/>
			<div className="absolute inset-y-0 left-0 lg:left-10 pl-3 flex items-center pointer-events-none">
				<AiOutlineSearch className="text-gray-500 text-[2rem]" />
			</div>
		</div>
	);
};

export default SearchBox;

"use client";
import { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import DataTable from "../UI/DataTable";
import Card from "../UI/Card";
import SearchBox from "../UI/SearchBox";
import { TableData } from "@/libs/types";

function TableContainer() {
	const [data, setData] = useState<TableData[]>([]);
	const [view, setView] = useState<string>("list");
	const [input, setInput] = useState<string>("");
	const [filteredData, setFilterdData] = useState<TableData[]>([]);
	async function getData() {
		const response = await fetch("https://coralmango.com/api/react-test", {
			next: { revalidate: 10 },
		});
		let result = await response.json();
		return result;
	}
	const handleSearch = (searchInput: string) => {
		const filtered = data.filter((item) =>
			item.name.toLowerCase().includes(searchInput.toLowerCase())
		);
		setFilterdData(filtered);
	};

	useEffect(() => {
		async function handler() {
			const data = await getData();
			setData(data);
		}
		handler();
	}, []);

	const sortRef = useRef<HTMLDivElement>(null);
	const viewRef = useRef<HTMLDivElement>(null);
	const showOptions = () => {
		if (sortRef && sortRef.current) {
			sortRef.current.classList.add("shown1");
		}
	};

	const sortData = (info: string) => {
		if (data) {
			let sortedData = [...data].sort((a, b) => {
				let first;
				let second;
				if (info == "name") {
					first = a.name.toUpperCase();
					second = b.name.toUpperCase();
				} else {
					first = a.age;
					second = b.age;
				}
				if (first < second) {
					return -1;
				}
				if (first > second) {
					return 1;
				}

				return 0;
			});
			setData(sortedData);
		}
	};

	return (
		<div className="mt-10 w-[95%] lg:w-2/3 mx-auto flex justify-center flex-col gap-5">
			<SearchBox
				input={input}
				setInput={setInput}
				handleSearch={handleSearch}
			/>
			<div className="flex gap-5">
				<div className="relative flex items-center gap-2">
					<span
						className="text-md font-semibold sort"
						onMouseOver={(e: any) => showOptions()}
					>
						Sort By
					</span>
					<IoMdArrowDropdown />
					<div
						className="toshow1 hidden absolute w-60 -bottom-0 mt-10 bg-white shadow-lg rounded-md flex-col  py-2"
						ref={sortRef}
						onMouseLeave={() => sortRef.current?.classList.remove("shown1")}
					>
						<span
							className="hover:bg-gray-200 duration-150 px-3 py-1"
							onClick={() => sortData("name")}
						>
							name
						</span>
						<hr />
						<span
							className="hover:bg-gray-200 duration-150 px-3 py-1"
							onClick={() => sortData("age")}
						>
							age
						</span>
						<hr />
					</div>
				</div>
				<div className="relative flex items-center gap-2">
					<span
						className="text-md font-semibold sort"
						onMouseOver={(e: any) => viewRef.current?.classList.add("shown1")}
					>
						View
					</span>
					<IoMdArrowDropdown />
					<div
						className="toshow2 hidden absolute w-60 -bottom-0 mt-10 bg-white shadow-lg rounded-md flex-col  py-2"
						ref={viewRef}
						onMouseLeave={() => viewRef.current?.classList.remove("shown1")}
					>
						<span
							className="hover:bg-gray-200 duration-150 px-3 py-1"
							onClick={() => setView("list")}
						>
							table
						</span>
						<hr />
						<span
							className="hover:bg-gray-200 duration-150 px-3 py-1"
							onClick={() => setView("grid")}
						>
							grid
						</span>
						<hr />
					</div>
				</div>
			</div>
			{filteredData.length > 0 && input && (
				<div className="px-5 py-3 bg-blue-400 w-1/3 rounded-lg text-white">
					You are viewing filtered results !
				</div>
			)}
			{view == "list" && data ? (
				<DataTable data={input && filteredData ? filteredData : data} />
			) : (
				<div className="w-[80%] lg:w-full flex mx-auto flex-col md:flex md:flex-wrap lg:flex-row gap-5 items-center justify-between">
					{input && filteredData
						? filteredData.map((item) => <Card data={item} key={item.name} />)
						: data.map((item) => <Card data={item} key={item.name} />)}
					{input && filteredData.length == 0 && (
						<div className="px-5 py-3 bg-blue-400 w-1/3 rounded-lg my-5 text-white">
							No items to showww
						</div>
					)}
				</div>
			)}
		</div>
	);
}

export default TableContainer;

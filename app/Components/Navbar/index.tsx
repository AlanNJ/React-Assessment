import React, { useRef, forwardRef } from "react";
import { IoClose } from "react-icons/io5";
import "./navbar.css";
import Logo from "../Logo";
import Link from "next/link";
import { IoMdArrowDropdown } from "react-icons/io";

// import HotDeals from "./HotDeals";
// import DropDownMenuV2 from "../dropdown/DropDownMenuV2";

interface NavBarProps {
	innerRef: any;
	state: any;
	onClose: any;
}
interface props {
	state?: string;
	onClose: () => void;
	children?: React.ReactNode;
	ref: React.HTMLProps<HTMLDivElement>;
}

const Navbar = forwardRef<HTMLDivElement, props>(({ state, onClose }, ref) => {
	const getAnimationClassName = () => {
		switch (state) {
			case "entering":
				return "entering";
			case "entered":
				return "entered";
			case "exiting":
				return "exiting";
			default:
				return "";
		}
	};
	return (
		// <div
		// 	className="w-[100%] h-[100vh] bg-black/20 fixed top-0 z-10 side"
		// 	ref={ref}
		// >

		<div
			className={`navbar w-[80vw] h-full bg-white fixed z-[1000] top-0 -left-[30rem] py-3  ${getAnimationClassName()}`}
			ref={ref}
		>
			<div className="flex flex-col relative justify-center">
				<IoClose
					onClick={onClose}
					className="absolute right-0 text-lg mr-5 "
					style={{ fontSize: "2rem" }}
				/>
				<div>
					<Logo />
				</div>
			</div>
			<div
				className="mt-10 ml-5 flex flex-col lg:flex-row lg:items-center gap-5"
				onClick={onClose}
			>
				<span className="px-3 py-2 bg-white/90 rounded-md shadow-sm hover:scale-105 duration-300">
					<Link href="/">
						<b>Ass.</b> React Js
					</Link>
				</span>
				<hr />

				<div
					className="flex gap-2 items-center px-3 py-2 bg-white/90 rounded-md shadow-sm hover:scale-105 duration-300"
					onClick={onClose}
				>
					<Link href="/nodejs">
						<b>Ass.</b> Node Js
					</Link>
				</div>
				<hr />
				<Link href="/admin">
					<span
						className="px-3 py-2 bg-white/90 rounded-md shadow-sm hover:scale-105 duration-300"
						onClick={onClose}
					>
						Admin Page
					</span>
				</Link>
				<hr />
			</div>
		</div>

		// </div>
	);
});

export default Navbar;

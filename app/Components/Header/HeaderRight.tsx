"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

interface Iheader {
	user: string | null;
	setUser: (i: string | null) => void;
}

const HeaderRight = ({ user, setUser }: Iheader) => {
	let ref = useRef<HTMLDivElement>(null);
	function showLogout() {
		if (ref.current) {
			ref.current.classList.add("show");
		}
	}

	function removeClass() {
		if (ref.current) {
			ref.current.classList.remove("show");
		}
	}
	function logOut() {
		localStorage.removeItem("user");
		setUser(null);
	}

	return (
		<div className="flex gap-5 items-center">
			<div className="hidden lg:flex items-center gap-5">
				<span className="px-3 py-2 bg-white/90 rounded-md shadow-sm hover:scale-105 duration-300">
					<Link href="/">
						<b>Ass.</b> React Js
					</Link>
				</span>

				<div className="flex gap-2 items-center px-3 py-2 bg-white/90 rounded-md shadow-sm hover:scale-105 duration-300">
					<Link href="/nodejs">
						<b>Ass.</b> Node Js
					</Link>
					<IoMdArrowDropdown />
				</div>
				<Link href="/admin">
					<span className="px-3 py-2 bg-white/90 rounded-md shadow-sm hover:scale-105 duration-300">
						Admin Page
					</span>
				</Link>
			</div>
			{user === null ? (
				<Link href="/login">
					<span className="px-3 py-2 bg-white/90 rounded-md shadow-sm hover:scale-105 duration-300">
						login | signup
					</span>
				</Link>
			) : (
				<div
					className="relative w-10 h-10 bg-gray-400 rounded-full text-lg flex items-center justify-center font-bold"
					onMouseOver={() => showLogout()}
				>
					{user[0].toUpperCase()}
					<div
						className="hidden absolute -bottom-10 w-20 h-10 rounded-md bg-white duration-300 cursor-pointer hover:scale-105"
						ref={ref}
						onMouseLeave={() => removeClass()}
						onClick={() => logOut()}
					>
						logout
					</div>
				</div>
			)}
		</div>
	);
};

export default HeaderRight;

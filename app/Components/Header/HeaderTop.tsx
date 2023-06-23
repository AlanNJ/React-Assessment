"use client";
import React, { useEffect, useRef, useState } from "react";

import { Transition } from "react-transition-group";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import Navbar from "../Navbar";
import { AiOutlineAlignLeft } from "react-icons/ai";

const HeaderTop = () => {
	let [isSideBarOpen, setSidebarOpen] = useState<boolean>(false);
	const [user, setUser] = useState<string | null>(null);
	let navRef = useRef<HTMLDivElement>(null);
	function closeNav() {
		setSidebarOpen(false);
	}
	const defaultStyle = {
		transition: `opacity 300ms ease-in-out`,
		opacity: 0,
	};

	const transitionStyles = {
		entering: { opacity: 1 },
		entered: { opacity: 1 },
		exiting: { opacity: 0 },
		exited: { opacity: 0 },
		unmounted: {},
	};
	useEffect(() => {
		setUser(localStorage.getItem("user"));
	}, []);
	return (
		<div className="w-full py-3 px-2 border  flex justify-between items-center text-lg  mt-2">
			<div className="lg:hidden" onClick={() => setSidebarOpen(true)}>
				<AiOutlineAlignLeft style={{ fontSize: "2rem" }} />
			</div>
			<div className="">
				<HeaderLeft />
			</div>
			<HeaderRight user={user} setUser={setUser} />
			<Transition
				nodeRef={navRef}
				in={isSideBarOpen!}
				timeout={500}
				mountOnEnter
				unmountOnExit
			>
				{(state) => {
					return (
						<>
							<Navbar ref={navRef} state={state} onClose={closeNav} />

							<div
								className={`fixed inset-0 z-[9] bg-black/60
                  
                  `}
								style={{
									...defaultStyle,
									...transitionStyles[state],
								}}
								onClick={closeNav}
							></div>
						</>
					);
				}}
			</Transition>
		</div>
	);
};

export default HeaderTop;

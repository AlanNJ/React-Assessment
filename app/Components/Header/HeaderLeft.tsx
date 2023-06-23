import React from "react";
import SearchBox from "../UI/SearchBox";
import Link from "next/link";
import Logo from "../Logo";

const HeaderLeft = () => {
	return (
		<div className="flex lg:flex-grow items-center gap-5">
			<Link href="/">
				<Logo />
			</Link>
		</div>
	);
};

export default HeaderLeft;

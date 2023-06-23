import Image from "next/image";
import React from "react";
import LogoImage from "../../public/images/Logo.jpeg";

const Logo = () => {
	return (
		<div className="scale-75 lg:scale-100">
			<Image
				src={LogoImage}
				alt='"logo'
				width={80}
				height={80}
				style={{ borderRadius: "50%" }}
			/>
		</div>
	);
};

export default Logo;

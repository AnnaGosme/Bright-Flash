import { useEffect, useState } from "react";
import { ImageMap } from "@qiuz/react-image-map";
import Header from "../Header/Header";

import LandingPageMenu from "./LandingPageMenu";

import "./Home.css";

const HomePage = () => {
	const [showMenu, setShowMenu] = useState(false);

	const img =
		"https://res.cloudinary.com/dg5lakmem/image/upload/v1619255445/Bright%20Flash/collage-menu_bnx0n7.jpg";

	const mapArea = [
		{
			width: "23.448625180897245%",
			height: "23.615541922290383%",
			left: "22.431259044862518%",
			top: "4.498977505112485%",
		},
	];

	const onMapClick = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div className="body-cover">
			{showMenu ? <LandingPageMenu /> : ""}

			<ImageMap
				className="collage-click"
				src={img}
				map={mapArea}
				onMapClick={onMapClick}
			/>
		</div>
	);
};

export default HomePage;

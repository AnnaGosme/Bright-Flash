import { useState } from "react";

import Header from "../Header/Header";
import Footer from "../../Footer";
import WomenPage from "./WomenPage";

import "./womenInfo.css";

export default function ListOfWomen({ data }) {
	const [info, setInfo] = useState();

	const handleInfo = () => {
		console.log("uffffff");
		setInfo(data);
	};
	return (
		<div>
			{data.map((img) => (
				<img
					className="women-cards"
					key={img.id}
					src={img.image}
					onClick={handleInfo}
				/>
			))}
		</div>
	);
}

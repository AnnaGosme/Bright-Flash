import Header from "../Header/Header";
import Footer from "../../Footer";

import "./listOfWomen.css";

export default function ListOfWomen({ data }) {
	return (
		<div>
			{data.map((img) => (
				<img className="women-cards" src={img.image} />
			))}
		</div>
	);
}

import * as GoIcons from "react-icons/go";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";
import "./header.css";

export default function Header() {
	const [menuItem, setMenuItem] = useState(false);
	const showHide = () => setMenuItem(!menuItem);

	return (
		<div>
			<header>
				<nav className="navbar">
					<img
						id="logo"
						src="https://res.cloudinary.com/dg5lakmem/image/upload/v1618495596/Bright%20Flash/Bright-Flash-logo_vxoimo.png"
						alt="bright-flash-logo"
						style={{ justifyContent: menuItem ? "flex-start" : "flex-end" }}
					/>
					<div className="nav-menu" onClick={showHide}>
						{!menuItem ? (
							<GoIcons.GoThreeBars className="opening-tag" />
						) : (
							<AiIcons.AiOutlineClose className="close" />
						)}
						<div className={menuItem ? "nav-menu active" : "closing-tag"}>
							<a href="#home">Home Page</a>
							<a href="#Games">Games</a>
							<a href="#About">About us</a>
							<a href="#Women">Women</a>
							<a href="#Contact">Contact us</a>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}

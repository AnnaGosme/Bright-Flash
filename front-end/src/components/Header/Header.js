import { useState } from "react";
import * as GoIcons from "react-icons/go";
import * as AiIcons from "react-icons/ai";
import { MenuItems } from "./MenuItems";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useLocation,
} from "react-router-dom";

import "./header.css";

import Memory from "../Memory/Memory";
import Home from "../Home/Home";
import ListOfWomen from "../ListOfWomen";
import About from "../About";
import Contact from "../Contact";

export default function Header() {
	const [menuList, setMenuList] = useState(false);
	const showHide = () => setMenuList(!menuList);

	let location = useLocation();

	return (
		location.pathname !== "/" && (
			<div>
				<nav className="navbar-items">
					<div className="navbar-logo">
						<img
							id="logo"
							src="https://res.cloudinary.com/dg5lakmem/image/upload/v1618495596/Bright%20Flash/Bright-Flash-logo_vxoimo.png"
							alt="bright-flash-logo"
						/>
					</div>
					<div className="menu-icon" onClick={showHide}>
						{!menuList ? <GoIcons.GoThreeBars /> : <AiIcons.AiOutlineClose />}
					</div>
					<div className="menu-list">
						<ul className={menuList ? "nav-menu active" : "nav-menu"}>
							{MenuItems.map((item, index) => {
								return (
									<li key={index}>
										<Link
											to={item.url}
											className={item.cName}
											onClick={() => showHide(menuList)}
										>
											{item.title}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</nav>
			</div>
		)
	);
}

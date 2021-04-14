import React from "react";

//import css

export default function Header() {
	return (
		//links to each page ?
		<div>
			<header>
				<nav className="navbar">
					<img
						id="logo"
						src="https://res.cloudinary.com/dg5lakmem/image/upload/v1618419127/Bright%20Flash/Bright-Flash-logo_csumr8.png"
						alt="logo"
					/>
					<div className="menu-item">
						<a className="active" href="#home">
							Home Page
						</a>
						<a href="#Games">Games</a>
						<a href="#About">About us</a>
						<a href="#Women">Women</a>
						<a href="#Contact">Contact us</a>
					</div>
				</nav>
			</header>
		</div>
	);
}

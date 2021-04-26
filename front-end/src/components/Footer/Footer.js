import { useLocation } from "react-router-dom";
import Header from "../Header/Header";
import "./Footer.css";
//import css

function Footer({data}) {
	let location = useLocation();
	return (
		location.pathname !== "/" && (
			<div className="footerpage-container">
				<footer className="main-footer">
					<FooterQuote />

					<div className="container">
						<img
							className="icon"
							src="https://res.cloudinary.com/dnefeccae/image/upload/v1618531048/Bright%20flash/instagram-logo_eqmuft.png"
						/>
						<img
							className="icon"
							src="https://res.cloudinary.com/dnefeccae/image/upload/v1618531084/Bright%20flash/email-logo_q0ectn.png"
						/>
						<div className="nav_about">
							<h2>ABOUT US</h2>
						</div>
					</div>
				</footer>
			</div>
		)
	);
}

export default Footer;

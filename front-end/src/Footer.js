import { Link, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import { useEffect, data } from "react";

import "./Footer.css";
import About from "./components/About";
//import css

function Footer({ data }) {
  let location = useLocation();
  return (
    location.pathname !== "/" && (
      <div className="footerpage-container">
        <footer className="main-footer">
          <h1 className="quotes">
            {data.quote}
            "When uniques voices are united in a common cause, they make
            history"
          </h1>
          <div className="container">
            <Link to="https://www.instagram.com/brightflash.bf/">
              <img
                className="icon"
                src="https://res.cloudinary.com/dnefeccae/image/upload/v1618531048/Bright%20flash/instagram-logo_eqmuft.png"
              />
            </Link>
            <Link to="/contact">
              <img
                className="icon"
                src="https://res.cloudinary.com/dnefeccae/image/upload/v1618531084/Bright%20flash/email-logo_q0ectn.png"
              />
            </Link>
            <div className="nav_about">
              <Link to="/about">
                <h2>ABOUT US</h2>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    )
  );
}

export default Footer;

import React from "react";
// import Header from "./components/Header/Header";
import "./Footer.css";
import FooterQuote from "./FooterQuote";
//import css

function Footer({ data }) {
  return (
    <div className="footerpage-container">
      <footer className="main-footer">
        <FooterQuote />
        <div className="container">
          <img
            className="icon"
            src="https://res.cloudinary.com/dnefeccae/image/upload/v1618531048/Bright%20flash/instagram-logo_eqmuft.png"
            alt="instagram logo"
          />
          <img
            className="icon"
            src="https://res.cloudinary.com/dnefeccae/image/upload/v1618531084/Bright%20flash/email-logo_q0ectn.png"
            alt="email logo"
          />
          <div className="nav_about">
            <h2>ABOUT US</h2>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;

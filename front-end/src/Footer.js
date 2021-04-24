import React from "react";
import Header from "./components/Header/Header";
import "./Footer.css";
import FooterQuotes from "./components/Quotes/Quotes";
//import css

function Footer({ data }) {
  return (
    <div className="footerpage-container">
      <footer className="main-footer">
        <p className="Quote" quote={data.quote}></p>
        <p className="QuoteName" name={data.name}></p>
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
  );
}

export default Footer;

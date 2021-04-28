// import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import FooterQuote from "./FooterQuote";
import "./Footer.css";

function Footer({ info }) {
  const [allInfo, setAllInfo] = useState("");

  const randomInfo = () => {
    const foundInfo = info[Math.floor(Math.random() * info.length)];
    setAllInfo(foundInfo);
  };

  useEffect(randomInfo, []);

  // let location = useLocation();
  return (
    // location.pathname !== "/" && (
    <div className="footerpage-container">
      <footer className="main-footer">
        <FooterQuote quote={allInfo.quote} name={allInfo.name} />

        <div className="container">
          <img
            className="icon"
            src="https://res.cloudinary.com/dnefeccae/image/upload/v1618531048/Bright%20flash/instagram-logo_eqmuft.png"
            alt="facebook"
          />
          <img
            className="icon"
            src="https://res.cloudinary.com/dnefeccae/image/upload/v1618531084/Bright%20flash/email-logo_q0ectn.png"
            alt="contact us"
          />
          <div className="nav_about">
            <h2>ABOUT US</h2>
          </div>
        </div>
      </footer>
    </div>
  );
  // );
}

export default Footer;

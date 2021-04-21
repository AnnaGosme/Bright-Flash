import { useState, useRef, useEffect } from 'react';
//import Footer from "./Footer";
//import Home from "./Home.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick.js"

  const DropdownMenu = () => {
      const dropdownRef = useRef(null);
      const [isActive, setIsActive] = useState(false);
      const onClick = () => setIsActive(!isActive);

      useEffect(() => {
        const pageClickEvent = (e) => {
          if (dropdownRef.current !== null && !dropdownRef.current.contains(e.target)) {
            setIsActive(!isActive);
          }
        };
        if (isActive) {
          window.addEventListener('click', pageClickEvent);
        }
        return () => {
          window.removeEventListener('click', pageClickEvent);
        }
      }, [isActive]);

  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
      <span>Click</span>
      <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" />
      </button>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
        <ul>
          <li><a href="front-end/src/components/Home/DropdownMenu.jsx">Home<img src="https://res.cloudinary.com/octavian2111/image/upload/v1618563337/home_sjwzt4.png" alt="Home"/></a></li>
          <li><a href="./Memory">Memory Game<img src="https://res.cloudinary.com/octavian2111/image/upload/v1618563337/memory_dki5bx.png" alt="Memory Card Game" /></a></li>
          <li><a href="./ListOfWomen">Women<img src="https://res.cloudinary.com/octavian2111/image/upload/v1618563338/women_vvwlpg.png" alt="About the women in the game"/></a></li>
          <li><a href="./About">About<img src="https://res.cloudinary.com/octavian2111/image/upload/v1618563327/about_fungkw.png" alt="About the app developers"/></a></li>
          <li><a href="./Contact">Contact us<img src="https://res.cloudinary.com/octavian2111/image/upload/v1618563337/contact_ocppoz.png" alt="Contact the app developers"/></a></li>
        </ul>
      </nav>
    </div>
  );
  }


export default DropdownMenu

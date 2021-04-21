import { useState } from 'react';
import Menu from "./Menu";
//import Footer from ""./Footer";
import LandingPage from "./LandingPage.css";


export default function Landing() {

    const [menu, setMenu] = useState(false)
         //work a boolean that will reveal the menu when Event:MouseEnter and will hide the menu when Event:MouseLeave
    const onHover = () => setMenu(true)

  return (

      <div className="menuHoverZone"
      onMouseEnter={() => {
          console.log("Event:MouseEnter");
      }}
      onMouseLeave={() => {
          console.log("Event:MouseLeave")
      }}
      //script to change boolean value of onHover true=show menu false=hide menu with onHover
        //{ menu ? <Menu /> : null }
        >

         <div style={{ width: "700px", height:"300px", background:"transparent"}}></div>
         </div>
    //     //<Footer />
  );
}

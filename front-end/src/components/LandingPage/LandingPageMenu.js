import { useState } from 'react';

export default function Menu() {
    console.log("show menu")
    return (
    <div>
    <div class="wrapper">
  <div class="right-menu">
   <button class="menu">Menu</button>
    <div class="dropdown-menu">
      <a href="#"><img src="https://res.cloudinary.com/octavian2111/image/upload/v1618563337/home_sjwzt4.png" alt="Home"/></a>
      <a href="#"><img src="https://res.cloudinary.com/octavian2111/image/upload/v1618563337/memory_dki5bx.png" alt="Memory Card Game" /></a>
      <a href="#"><img src="https://res.cloudinary.com/octavian2111/image/upload/v1618563338/women_vvwlpg.png" alt="About the women in the game"/></a>
      <a href="#"><img src="https://res.cloudinary.com/octavian2111/image/upload/v1618563327/about_fungkw.png" alt="About the app developers"/></a>
      <a href="#"><img src="https://res.cloudinary.com/octavian2111/image/upload/v1618563337/contact_ocppoz.png" alt="Contact the app developers"/></a>
    </div>
   </div>
</div>
</div>
)
}
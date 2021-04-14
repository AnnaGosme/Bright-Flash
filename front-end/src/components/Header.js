import React from "react";

//import css

export default function Header() {
    return (
    
        //links to each page ?
        <div> 
             <img src = "https://picsum.photos/200/300"alt = "logo" ></img>
            <ul>
                <li className="active" href="#home">Home Page</li>
                <li href="#Games">Games</li>
                <li href="#About">About us</li>
                <li href="#Women">Women</li>
                <li href="#Contact">Contact us</li>
            </ul>
        </div>
    )
}
import React from "react";
import Header from "./Header/Header";
import Footer from "../Footer";
import Home from "./Home/Home";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./GameIntroPage.css";
// import css

function GameIntroPage() {
  return (
    <div className="page-gameintro">
      <div className="selection-lev">
        <h5>PLEASE SELECT ONE LEVEL</h5>
      </div>
      <div className="mt-3">
        <div>
          <Link to="/memory/1" className="btn btn-one m-2">
            LEVEL 1
          </Link>
        </div>
        <div>
          <button className="btn btn-two m-2">LEVEL 2</button>
        </div>
        <div>
          <button className="btn btn-three m-2">LEVEL 3</button>
        </div>
        <div>
          <button className="btn btn-four m-2">LEVEL 4</button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default GameIntroPage;

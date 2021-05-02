import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./GameIntroPage.css";

function GameIntroPage() {
  return (
    <div className="page-gameintro">
      <div className="selection-lev">
        <h5>PLEASE SELECT A LEVEL</h5>
      </div>
      <div className="mt-3">
        <Link to="/memory/1">
          <button className="btn-one">LEVEL 1</button>
        </Link>
        <div>
          <Link to="/memory/2">
            <button className="btn-two">LEVEL 2</button>
          </Link>
        </div>
        <div>
          <Link to="/memory/3">
            <button className="btn-three">LEVEL 3</button>
          </Link>
        </div>
        <div>
          <Link to="/memory/4">
            <button className="btn-four">LEVEL 4</button>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default GameIntroPage;

import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer";
import Home from "./Home";
import "./GameIntroPage.css";
// import css

function GameIntroPage() {
  return (
    <div>
      <div className="selection-lev">
        <h5>PLEASE SELECT ONE LEVEL</h5>
      </div>
      <div className="mt-3">
        <div>
          <button className="btn btn-one m-2">LEVEL ONE</button>
        </div>
        <div>
          <button className="btn btn-two m-2">LEVEL TWO</button>
        </div>
        <div>
          <button className="btn btn-three m-2">LEVEL THREE</button>
        </div>
        <div>
          <button className="btn btn-four m-2">LEVEL FOUR</button>
        </div>
      </div>
      <div></div>
    </div>
  );
}
export default GameIntroPage;

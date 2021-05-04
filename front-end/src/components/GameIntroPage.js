import { Link } from "react-router-dom";
import "./GameIntroPage.css";

function GameIntroPage() {
  return (
    <div className="page-wrapper">
      <h5 className="level-select-text">PLEASE SELECT A LEVEL</h5>

      <div className="level-select-container">
        <Link to="/memory/1">
          <button className="level-button">LEVEL 1</button>
        </Link>

        <Link to="/memory/2">
          <button className="level-button">LEVEL 2</button>
        </Link>

        <Link to="/memory/3">
          <button className="level-button">LEVEL 3</button>
        </Link>

        <Link to="/memory/4">
          <button className="level-button">LEVEL 4</button>
        </Link>

      </div>
      </div>
    
  );
}
export default GameIntroPage;

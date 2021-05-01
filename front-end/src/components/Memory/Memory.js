import Card from "../Card";
import Header from "../Header/Header";
import Footer from "../../Footer";
import { Link } from "react-router-dom";
import "./Memory.css";
import Game from "./Game";
import { useParams } from "react-router-dom";

function Memory({ data }) {
  const { level } = useParams(); // get the parameters from the router path
  return (
    <div>
      <Game data={data} level={level} /> {/* send level as props */}
      <br />
      <div className="button-container">
        <button
          className="button"
          id="replay"
          type="button"
          onClick={() => window.location.reload(false)}
        >
          RESET
        </button>

        <Link to="2">
          <button className="button" id="go-on" type="button">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Memory;

import Card from "../Card";
import Header from "../Header/Header";
import Footer from "../../Footer";
import "./Memory.css";
import Game from "./Game"

function Memory() {
  return (
    <div>
		<Game />
      <br />
      <div className="button-container">
        <button
          className="button"
          id="replay"
          type="button"
          onClick={() => window.location.reload(false)}
        >
          Play again
        </button>

        <button className="button" id="go-on" type="button">
          Go On
        </button>
      </div>
    </div>
  );
}

export default Memory;

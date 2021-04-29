import Card from "./Card";
import Header from "./Header/Header";
import Footer from "../Footer";
import "./Memory.css";

function Memory() {
  return (
    <div>
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
          Next Level
        </button>
      </div>
    </div>
  );
}

export default Memory;

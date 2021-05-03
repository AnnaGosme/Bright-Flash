import Card from "./Card";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";;
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

<<<<<<< HEAD
				<button className="button" id="go-on" type="button">
					Next Level
				</button>
			</div>
		</div>
	);
=======
        <button className="button" id="go-on" type="button">
          Next Level
        </button>
      </div>
    </div>
  );
>>>>>>> 2b50eec444bc4be0c334cbd1458b0ad2193bcdd8
}

export default Memory;

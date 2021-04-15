import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import GameIntroPage from "./components/GameIntroPage";
import Memory from "./components/Memory";
//import About from "./components/About";
//import Women from "./components/Women";
//import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
			<GameIntroPage />
			<Memory />
			{/*<About />
			<Women />
			<Contact />*/}
			<Footer />
		</div>
	);
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));

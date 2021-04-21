import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./index.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameIntroPage from "./components/GameIntroPage";
import Games from "./components/Memory";
import About from "./components/About";
import ListOfWomen from "./components/ListOfWomen";
import Contact from "./components/Contact";
import Footer from "./Footer";


function App() {
	const getData = () => {
		fetch("http://localhost:5000/")
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	getData();

	return (
		<div className="App">
			<Router>
				<div>
					<Header />
					<Switch>
						<Route path="/games" component={Games} />
						<Route path="/women" component={ListOfWomen} />
						<Route path="/about" component={About} />
						<Route path="/contact" component={Contact} />
						<Route exact path="/" component={Home} />
					</Switch>
					<Footer />
				</div>
			</Router>
		</div>
	);
}

export default App;

ReactDOM.render(<App />, document.getElementById("root"));

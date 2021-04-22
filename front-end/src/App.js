import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FormspreeProvider } from "@formspree/react";

import "./index.css";

import Header from "./components/Header/Header";
import Home from "./components/Home";
import GameIntroPage from "./components/GameIntroPage";
import Memory from "./components/Memory";
import About from "./components/About";
import ListOfWomen from "./components/ListOfWomen";
import Contact from "./components/Contact";
import Footer from "./Footer";
import { AiFillWindows } from "react-icons/ai";

function App() {
	const getData = () => {
		fetch("http://localhost:5000/")
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	getData();

	return (
		<div className="App">
			<FormspreeProvider project="1661932041131785320" />
			<Router>
				<div>
					<Header />
					<Switch>
						<Route path="/memory" component={Memory} />
						<Route path="/introgame" component={GameIntroPage} />
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

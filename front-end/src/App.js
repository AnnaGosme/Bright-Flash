import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FormspreeProvider } from "@formspree/react";

import "./index.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import GameIntroPage from "./components/GameIntroPage";
import Memory from "./components/Memory/Memory";
import About from "./components/About";
import ListOfWomen from "./components/ListOfWomen";
import Contact from "./components/Contact";
import Footer from "./Footer";
import { AiFillWindows } from "react-icons/ai";

function App() {
  //State is defined here
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // add a new variable in the state to check if the data is loading
  const getData = () => {
    setIsLoading(true); // change the state: data is loading
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  };

  useEffect(getData, []);

  return (
    <div className="App">
      <FormspreeProvider project="1661932041131785320" />
      {isLoading ? ( //while is loading the data, show this label
        <div>Loading ...</div>
      ) : (
        //when the data is loaded
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path="/memory">
                <Memory data={data} />
              </Route>
              <Route
                path="/introgame"
                render={() => <GameIntroPage data={data} />}
              />
              <Route path="/women" component={ListOfWomen} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route exact path="/" component={Home} />
            </Switch>
            <Footer data={data} />
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;

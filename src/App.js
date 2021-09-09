import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import HomeMobile from "./components/HomeMobile";

import Fruits from "./components/Fruits";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowWidth < 1024) {
    return (
      <Router>
        <div className="mobile">
          <Switch>
            <Route path="/" exact component={HomeMobile} />
            <Route path="/fruits" component={Fruits} />
          </Switch>
        </div>
      </Router>
    );
  } else {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/fruits" component={Fruits} />
        </Switch>
      </Router>
    );
  }
}

export default App;

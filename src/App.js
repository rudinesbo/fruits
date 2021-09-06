import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Home from "./components/Home";
import HomeMobile from "./components/HomeMobile";

import Fruits from "./components/Fruits";

function App() {
  const isMobileDevice = useMediaQuery({
    query: "(max-device-width: 1023px)",
  });

  if (isMobileDevice) {
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

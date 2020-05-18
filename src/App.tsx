import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './routes/Home/Home';
import Cars from "./routes/Cars/Cars";
import Garage from "./routes/Garage/Garage";
import Contact from "./routes/Contact/Contact";

export default function BasicExample() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/cars">
            <Cars />
          </Route>

          <Route path="/garage">
            <Garage />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

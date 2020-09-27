import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './routes/Home/Home';
import Rent from "./routes/Rent/Rent";
import Tow from "./routes/Tow/Tow";
import Garage from "./routes/Garage/Garage";

export default function BasicExample() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          
          <Route path="/location">
            <Rent />
          </Route>
          
          <Route path="/depannage">
            <Tow />
          </Route>

          <Route path="/garage">
            <Garage />
          </Route>

          <Redirect to='/' />
        </Switch>
      </>
    </Router>
  );
}

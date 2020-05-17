import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './routes/Home/Home';
import NavBar from './components/NavBar/NavBar';

export default function BasicExample() {
  return (
    <Router>
      <div>
        <NavBar />

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
      </div>
    </Router>
  );
}

function Cars() {
  return (
    <div>
      <h2>Véhicules</h2>
    </div>
  );
}

function Garage() {
  return (
    <div>
      <h2>Le Garage</h2>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

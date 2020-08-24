import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, Route, Switch, Link, useParams, useRouteMatch
}
  from "react-router-dom";

import './index.css';

import Nav from './components/Nav';
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route exact path="/" component={Login} />
          <Route path="/Admin" component={Nav} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;

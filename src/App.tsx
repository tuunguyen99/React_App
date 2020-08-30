import React, { useEffect } from "react";
import Layout from "./layout/Layout";
import Login from "./login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  
  return (
    <Router>
      <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/blank" component={Layout} />
      </Switch>
    </Router>
  );
}

export default App;

import React, { useEffect } from "react";
import Layout from "./layout/Layout";
import Login from "./login/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page404 from "./layout/page404";

const App = () => {
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/blank" exact component={Layout} />
        <Route component={Page404}/>
      </Switch>
    </Router>
  );
}

export default App;

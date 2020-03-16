import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../screen/auth/Login";
import DashboardNavigation from "./DashboardNavigation";


export default function Navigation() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/seller" component={DashboardNavigation} />
          <Route exact path="/" component={Login} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

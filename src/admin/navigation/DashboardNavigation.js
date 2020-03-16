import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../screen/dashboard/home/Home";
import { TopNavbar, LeftNavbar } from "../screen/_section/navbar/Navbar";
import Setting from "../screen/dashboard/settings/Setting";
import Product from "../screen/dashboard/product/Product";
import "./navigation.scss";

export default function DashboardNavigation() {
  return (
    <Router>
      <div className="nav_holder">
        <LeftNavbar />
        <div className="nav_other">
          <TopNavbar />
          <Switch>
            <div style={{ margin: 10}}>
              <Route exact path="/seller/" component={Home} />
              <Route path="/seller/product" component={Product} />
              <Route path="/seller/setting" component={Setting} />
            </div>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

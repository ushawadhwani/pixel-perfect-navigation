import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home";
import Screen2 from "./pages/screen2";

export default class MyRouting extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/screen2" component={Screen2} />
        <Redirect from="*" to="/" />
      </Switch>
    );
  }
}

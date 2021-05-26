
import Admin from "./pages/admin";
import Home from "./pages/home";
import React from "react";
import { Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <>
        <Switch>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
    </>
  );
}

import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./app";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { UserProvider } from "./shared/user-provider";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <App></App>
      </UserProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
//import registerServiceWorker from "register-service-worker";
import "react-mdl/extra/material.css";
import "react-mdl/extra/material.js";
import { BrowserRouter } from "react-router-dom";
import Main from "./Components/Main";

/*function App() {
  return (
    <div className="App">
      <h1>Hello Code Sandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}*/

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
//registerServiceWorker();

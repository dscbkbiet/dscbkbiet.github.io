import React from "react";
import ReactDom, { render } from "react-dom";
import App from "./components/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";

render(<App />, document.getElementById("root"));

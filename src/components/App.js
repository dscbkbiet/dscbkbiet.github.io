import "../styles/App.css";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Events from "./Events";
import Podcasts from './Podcasts';
import React from "react";

function App() {
  return (
    <div className="App">
      <Home />
      <Events />
      <ContactUs />
      <Podcasts />
    </div>
  );
}

export default App;

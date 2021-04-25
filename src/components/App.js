import "../styles/App.css";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Events from "./Events";
import React from "react";

function App() {
  return (
    <div className="App">
      <Home />
      <Events />
      <ContactUs />
    </div>
  );
}

export default App;

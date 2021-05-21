import "../styles/App.css";

import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import About from "./About";
import Blog from "./Blog";
import ContactUs from "./ContactUs";
import Events from "./Events";
import EventsPage from "./EventsPage";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Podcasts from "./Podcasts";
import PodcastStrip from "./PodcastStrip";
import Team from "./Team";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div
          style={{
            height: 80,
          }}
        ></div>
        <Switch>
          <Route path="/dsc-bkbiet-events">
            <EventsPage />
          </Route>
          <Route path="/Team">
            <Team />
          </Route>
          <Route path="/contactUs">
            <ContactUs />
          </Route>
          <Route path="/Podcasts">
            <Podcasts />
          </Route>
          <Route path="/Blog">
            <Blog />
          </Route>
          <Route exact path="/">
            <Home />
            <Events />
          </Route>
        </Switch>
        <About />
        <PodcastStrip />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

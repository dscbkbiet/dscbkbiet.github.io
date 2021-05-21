import "../styles/App.css";
import Home from "./Home";
import Events from "./Events";
import Team from "./Team";
import Blog from "./Blog";
import EventsPage from "./EventsPage";
import ContactUs from "./ContactUs";
import Podcasts from "./Podcasts";
import Header from "./Header";
import About from "./About";
import PodcastStrip from './PodcastStrip';

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <div style={{ height: 80 }}></div>
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

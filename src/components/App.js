import "../styles/App.css";

import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

import Blog from "./Blog";
import ContactUs from "./ContactUs";
import Events from "./Events";
import EventsPage from "./EventsPage";
import Home from "./Home";
import Podcasts from "./Podcasts";
import Team from "./Team";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/dsc-bkbiet-events">
             <EventsPage />
          </Route>
          <Route path="/">
            <div className="App">
              <Home />
              <Events />
              <Team />
              <br/>
              <br/>
              <ContactUs />
              <br/>
              <br/>
              <Podcasts />
              <br/>
              <br/>
              <Blog />
            </div>
          </Route>
        </Switch>
      </div>
       
    </BrowserRouter>

  );
}

export default App;
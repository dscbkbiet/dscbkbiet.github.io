import "../styles/App.css";
import Home from "./Home";
import Events from "./Events";
import Blog from "./Blog";
import EventsPage from "./EventsPage";
import ContactUs from "./ContactUs";
import Podcasts from "./Podcasts";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/dsc-bkbiet-events">
             <EventsPage />
          </Route>
        
          <Route path="/">
            <Home />
            <Events />
            <ContactUs />
            <Podcasts />
            <Blog />
          </Route>
        </Switch>
      </div>
       
    </BrowserRouter>
    
  );
}

export default App;
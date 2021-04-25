import "../styles/App.css";
import Home from "./Home";
import Events from "./Events";
import Team from "./Team";
import EventsPage from "./EventsPage";
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
            <Team />
          </Route>
        </Switch>
      </div>
       
    </BrowserRouter>
    
  );
}

export default App;

import React from 'react';
import './App.css';
import Navigation from './Navigation'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import About from './https://cse115b-plasticpollution.github.io/plasticpollution/home';
import Contact from './components/Contact';
import Error from './components/Error';
import Faq from './components/Faq';
import Adventure from './components/Adventure';
import Activist from './components/Activist';
import Macro from "./components/Macro";
import Micro from "./components/Micro";
import Nano from "./components/Nano";
import HumanConsumptionNano from "./components/HumanConsumptionNano";
import PreventionJourney from "./components/PreventionJourney";
import NanoEvaporation from "./components/NanoEvaporation";

function App() {
  return (
    <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/https://cse115b-plasticpollution.github.io/plasticpollution/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/faq" component={Faq}/>
             <Route path="/adventure" component={Adventure}/>
             <Route path="/Macro" component={Macro}/>
             <Route path="/Micro" component={Micro}/>
              <Route path="/Nano" component={Nano}/>
             <Route path="/activist" component={Activist}/>
             <Route path="/HumanConsumptionNano" component={HumanConsumptionNano}/>
             <Route path="/PreventionJourney" component={PreventionJourney}/>
             <Route path="/NanoEvaporation" component={NanoEvaporation}/>
            <Route component={Error}/>
           </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;

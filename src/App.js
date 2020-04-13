import React from 'react';
import './App.css';
import Navigation from './Navigation'
import {BrowserRouter,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Faq from './components/Faq';
import Adventure from './components/Adventure';
import Activist from './components/Activist';
import Macro from "./components/Macro";
import Micro from "./components/Micro";
import MicroOcean from "./components/microOcean";
import Nano from "./components/Nano";
import HumanConsumptionNano from "./components/HumanConsumptionNano";
import PreventionJourney from "./components/PreventionJourney";
import NanoEvaporation from "./components/NanoEvaporation";
import Macro2 from "./components/Macro2"
import MacroReuse from "./components/MacroReuse"
import MacroDump from "./components/MacroDump"
import MacroOcean from "./components/MacroOcean"
import MacroRecycle from "./components/MacroRecycle"
import MacroAsia from "./components/MacroAsia"
import { HashRouter, Route, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const particleOpt = {particles:{
  line_link: {
    number: {
      value: 2000,
      density: {
        enable: true,
        value_area: 2000
      }
    }
  }
}}

function App(){
    return (
      <HashRouter basename="/">
      <Switch>
        <div>
      <Navigation />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact}/>
          <Route path="/faq" component={Faq}/>
          <Route path="/adventure" component={Adventure}/>
          <Route path="/Macro" component={Macro}/>
          <Route path="/Macro2" component={Macro2}/>
          <Route path="/MacroReuse" component={MacroReuse}/>
          <Route path="/MacroDump" component={MacroDump}/>
          <Route path="/MacroOcean" component={MacroOcean}/>
          <Route path="/MacroRecycle" component={MacroRecycle}/>
          <Route path="/MacroAsia" component={MacroAsia}/>
          <Route path="/Micro" component={Micro}/>
          <Route path="/Ocean" component={MicroOcean}/>
          <Route path="/Nano" component={Nano}/>
          <Route path="/activist" component={Activist}/>
          <Route path="/HumanConsumptionNano" component={HumanConsumptionNano}/>
          <Route path="/PreventionJourney" component={PreventionJourney}/>
          <Route path="/NanoEvaporation" component={NanoEvaporation}/>
          <Route path ="/Error" component={Error}/>
        </div>
        <div className ="particleBody">
        <Particles
  params={particleOpt}
  />
        </div>
       </Switch>
      </HashRouter>
    );
}

export default App;

import React from 'react';
import './App.css';
/* Tools Imported - Boot Strap React-Springs*/
import Navigation from './Navigation'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTrail, animated } from 'react-spring';
/* End of Tools Imported - Boot Strap React-Springs*/
/* Navigation & Linkage */
import { HashRouter, Router, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
/* End of Navigation & Linkage */
/* JS & CSS FILES */
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
import  "./components/blobUseTrail.css";
import Macro2 from "./components/Macro2"
import MacroReuse from "./components/MacroReuse"
import MacroDump from "./components/MacroDump"
import MacroOcean from "./components/MacroOcean"
import MacroRecycle from "./components/MacroRecycle"
import MacroAsia from "./components/MacroAsia"
import FoodWeb from "./components/FoodWeb"
import FrozenFish from "./components/frozenFish"
import popOverNano from "./components/popOverNano"
import Store from "./components/store"
import Cosmetics from './components/cosmetics'
import Clothes from './components/clothes'
import Wastewater from './components/wastewater'

/* End of JS & CSS FILES */

//Hash Router:
//A <Router> that uses the hash portion of the URL (i.e. window.location.hash)
//to keep your UI in sync with the URL.
function App(){
    return(
      <HashRouter>
        <Switch>
        <div>
          <Navigation />
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About}/>
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
          <Route path="/FoodWeb" component={FoodWeb}/>
          <Route path="/FishMarket" component={FrozenFish}/>
          <Route path="/Store" component={Store}/>
          <Route path="/Cosmetics" component={Cosmetics}/>
          <Route path="/Clothes" component={Clothes}/>
          <Route path="/Wastewater" component={Wastewater}/>
          <Route path="/Nano" component={Nano}/>
          <Route path="/activist" component={Activist}/>
          <Route path="/HumanConsumptionNano" component={HumanConsumptionNano}/>
          <Route path="/PreventionJourney" component={PreventionJourney}/>
          <Route path="/NanoEvaporation" component={NanoEvaporation}/>
          <Route path="/popOverNano" component={popOverNano}/>
          <Route path ="/Error" component={Error}/>
        </div>
            </Switch>
        </HashRouter>
  );
}
// End of Router ------------------------------------------------------------------------------

/* The App Component is the default component -------------------------------------------------
  1) Create a file.js under components directory
  2) Route the path from above to that file.js
  3) Create Underneath this code e.g) export a class X entends React.Component to render the function
     of that file.js. The rendering executes the function of your file.js
  4) Make sure to include the heading import file from './components/file.js' at the top of App.js
  *5 Optional ) You may have to go into Navigation to update your route path
  This is how one can nest components, so that they communicate to this* default wrapped
  You may reuse them (component contianing file.js with an executable function)
  on other components, simply by invoking: import foo from './components/file'
*/

/* Particle attributes */
const particleOpt = {particles:{
  line_link: {
    number: {
      value: 2250,
      density: {
        enable: true,
        value_area: 2250
      }
    }
  }
}}
/* Particle Rendered to Screen */
export class particles extends React.Component {
  render() {
    return (
      <div className ="particleBody">
      <Particles params={particleOpt} />
      </div>
    )
}}
/* NanoEvaporation Alias - Blob Fish Component, useTrail - This function */
export class NanoEvaporation extends React.Component {
    render(){
      return(NanoEvaporation())}

}

export default App;

import React from 'react';
import './App.css';
import Navbar from './Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Faq from './components/Faq'

function App() {
  return (
    <BrowserRouter>
        <div>
          <Navbar/>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/faq" component={Faq}/>
            <Route component={Error}/>
           </Switch>
        </div>
      </BrowserRouter>
  );
}


export default App;

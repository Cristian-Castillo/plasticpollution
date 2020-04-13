import React from 'react';
import rcenter from './assets/recyclingfactory.jpg'
import './MacroRecycle.css'
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




const Macro = (myRef) => {
    return (
      <div>
      <div className="scene_container2">
        <div className='leftcolumn'>
          <div className='buttonContainer'>
            <a className="backButton" href='/plasticpollution/#/Macro'>&#8249;</a>
          </div>
        </div>
        <div className="middle">
          <h1>Recycling Center</h1>
          <p>Macro information</p>
          <a id="area" className="areagood" href="/plasticpollution/#/Macro2"></a>
          <a id="area" className="areabad" href="/plasticpollution/#/MacroAsia"></a>
          <img className="landfill" src={rcenter} ></img>

        </div>
        <div className='rightcolumn'>
          <div className='buttonContainer'>
          </div>
        </div>

      </div>
      <div>
        <p id="d1"className="description2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
      </div>
      </div>
    );
}

export default Macro;

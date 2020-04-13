import React from 'react';
import kitchen from './assets/kitchen.jpg'
import './MacroReuse.css'
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
          <h1>Reusing Your Plastic</h1>
          <p>Macro information</p>
          <img className="kitchen" src={kitchen} ></img>

        </div>
        <div className='rightcolumn'>
          <div className='buttonContainer'>
            <a className="finishButton" href='/'>Finish</a>
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

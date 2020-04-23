import React from 'react';
import landfill from './assets/landfill.jpg'
import './Macro2.css'



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
          <h1>Landfill</h1>
          <p>Macro information</p>
          <img className="landfill" src={landfill} ></img>

        </div>
        <div className='rightcolumn'>
          <div className='buttonContainer'>
            <a className="finishButton" href='/plasticpollution/#/'>Finish</a>
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

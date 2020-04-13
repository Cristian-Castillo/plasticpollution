import React from 'react';
import ocean from './assets/ocean.jpg'
import './MacroOcean.css'


const Macro = (myRef) => {
    return (
      <div>
      <div className="scene_container2">
        <div className='leftcolumn'>
          <div className='buttonContainer'>
            <a className="backButton" href='/plasticpollution/#/MacroDump'>&#8249;</a>
          </div>
        </div>
        <div className="middle">
          <h1>Your Plastic in the Ocean</h1>
          <p>Macro information</p>
          <img className="ocean" src={ocean} ></img>

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

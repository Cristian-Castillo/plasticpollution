import React from 'react';
import stormdrain from './assets/stormdrain.jpg'
import './MacroDump.css'


const Macro = (myRef) => {
    return (
      <div>
      <div className="scene_container2">
        <div className='leftcolumn'>
          <div className='buttonContainer'>
            <a className="backButton" href='./Macro'>&#8249;</a>
          </div>
        </div>
        <div className="middle">
          <h1>Dumping Your Plastic</h1>
          <p>Oh no! Your plastic has been carried by the wind into the storm drain. Follow to storm drain to see where the plastic ends up.</p>
          <a id="area" className="areastorm" href="/MacroOcean"></a>
          <img className="stormdrain" src={stormdrain} ></img>

        </div>
        <div className='rightcolumn'>

        </div>
        
      </div>
      <div>
        <p id="d1"className="description2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
      </div>
      </div>
    );
}

export default Macro;

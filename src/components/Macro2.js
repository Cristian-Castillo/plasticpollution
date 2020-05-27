import React from 'react';
import landfill from './assets/landfill.jpg'
import './Macro2.css'


const Macro = (myRef) => {
    return (
      <div className="main_div_macro">
      <div className="scene_container2">
        <div className='leftcolumn'>
          <div className='buttonContainer'>
            <a className="backButton" href='./plasticpollution/#/Macro'>&#8249;</a>
          </div>
        </div>
        <div className="middle">
          <h1 className="macrotxttitle">Landfill</h1>
          <img className="landfill" src={landfill} ></img>

        </div>
        <div className='rightcolumn'>
          <div className='buttonContainer'>
            <a className="finishButton" href='/'>Finish</a>
          </div>
        </div>
        
      </div>
      <div> 
        <p className="description2 macrotxt"> None of the energy or material used can be recovered when plastics are disposed of in landfills [4]. Space constraints are also becoming an issue. Although land in the United States is abundant, smaller countries such as Denmark and Japan already are relying more heavily on incineration to conserve land resources </p>
        <p className="description2 macrotxt">This constitutes a long-term risk of contamination of soil and groundwater with plastics’ components [4] as well as with other contaminants contained in landfill leachate.</p>
      </div>
      </div>
    );
}

export default Macro;

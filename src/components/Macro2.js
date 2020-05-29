import React from 'react';
import landfill from './assets/landfill.jpg'
import './Macro2.css'
import MapChart from './landfillMap'


const Macro = (myRef) => {
    return (
      <div className="main_div_macro">
      <div className="scene_container2">
        <div className='leftcolumn'>
          <div className='buttonContainer'>
            <a className="backButton" href='./#/Macro'>&#8249;</a>
          </div>
        </div>
        <div className="middle">
          <h1 className="macrotxttitle">Landfill</h1>
          <img className="landfill" src={landfill} ></img>

        </div>
        <div className='rightcolumn'>
          <div className='buttonContainer'>
            <a className="finishButton" href='./#/'>Finish</a>
          </div>
        </div>
        
      </div>
      <div> 
        <p className="description2 macrotxt"> None of the energy or material used can be recovered when plastics are disposed of in landfills. Space constraints are also becoming an issue. Although land in the United States is abundant, smaller countries such as Denmark and Japan already are relying more heavily on incineration to conserve land resources.
        Even then landfills are plentiful in the US. </p>
        <div className="landfill_macro_double_cont">
        <img className="landfill_us_map"src="https://www.saveonenergy.com/assets/default/outreach/land-of-waste/asset1.png"></img>
        <p className="description2 macrotxt">This constitutes a long-term risk of contamination of soil and groundwater with plastics’ components as well as with other contaminants contained in landfill leachate.</p>
        </div>
        <h1 className="macrotxttitle">Largest Landfill Sites</h1>
        <div className="landfill_macro_double_cont">
        <div className="landfill_map_container"><MapChart></MapChart>
        <div className="area1_landfill"></div>
        <div className="area2_landfill"></div>
        <div className="area3_landfill"></div>
        <div className="area4_landfill"></div>
        <div className="area5_landfill"></div>
        <div className="area6_landfill"></div>
        <div className="area7_landfill"></div>
        <div className="area8_landfill"></div>
        <div className="landfill_apex"><p className="macrotxt centerlandfill">Apex Regional</p><div className="apex"></div><p className="macrotxtsmall">Location: Las Vegas, United States </p><p className="macrotxtsmall">Size: 2,200 acres </p></div>
        <div className="landfill_bordo"><p className="macrotxt centerlandfill">Bordo Poniente</p><div className="bordo"></div><p className="macrotxtsmall">Location: Mexico City, Mexico </p><p className="macrotxtsmall">Size: 927 acres </p></div>
        <div className="landfill_laogang"><p className="macrotxt centerlandfill">Laogang</p><div className="lao"></div><p className="macrotxtsmall">Location: Shanghai China</p><p className="macrotxtsmall">Size: 830 acres</p></div>
        <div className="landfill_malagrotta"><p className="macrotxt centerlandfill">Malagrotta</p><div className="mala"></div><p className="macrotxtsmall">Location: Rome Italy</p><p className="macrotxtsmall">Size: 680 acres</p></div>
        <div className="landfill_puenta"><p className="macrotxt centerlandfill">Puenta Hills</p><div className="puenta"></div><p className="macrotxtsmall">Location: Los Angelos, United States</p><p className="macrotxtsmall">Size: 630acres </p></div>
        <div className="landfill_sudo"><p className="macrotxt centerlandfill">Sudokwan</p><div className="sudo"></div><p className="macrotxtsmall">Location: Incheon, South Korea </p><p className="macrotxtsmall">Size: 570 acres </p></div>
        <div className="landfill_delhi"><p className="macrotxt centerlandfill">Delhi Landfills</p><div className="delhi"></div><p className="macrotxtsmall">Location: New Delhi, India</p><p className="macrotxtsmall">Size: 500 acres</p></div>
        <div className="landfill_deonar"><p className="macrotxt centerlandfill">Deonar</p><div className="deonar"></div><p className="macrotxtsmall">Location: Mumbai, India</p><p className="macrotxtsmall">Size: 326 acres</p></div>
        </div>
        </div>
      </div>
      </div>
    );
}

export default Macro;

import React from 'react';
import ocean from './assets/ocean.jpg'
import Card from './CardMicro'
import BagPopUp from './microPopBoxBag'
import './MacroOcean.css'


const Macro = (myRef) => {
    return (
      <div className="main_div_macro">
      <div className="scene_container2">
        <div className='leftcolumn'>
          <div className='buttonContainer'>
            <a className="backButton" href='./#/MacroDump'>&#8249;</a>
          </div>
        </div>
        <div className="middle">
          <h1 className="macrotxttitle">Your Plastic in the Ocean</h1>
          <p className="macrotxt">Once plastics end up in the ocean, it becomes much harder to clean up. However, there are some areas we have noted that can be focused on to attempt to remove plastics from the ocean environment. </p>
          <img className="oceanMacro" src={ocean} ></img>

        </div>
        <div className='rightcolumn'>
            <BagPopUp title = "Macro2Micro"/>
        </div>
        
      </div>
      <div className="ocean_macro_cards">
        <div className="ocean_macro_cards_txt">
        <p className="ocean_macro_txt_title">Beaches</p>
        <p className="description2 macrotxt">Some plastic that enters the ocean washes back up on beaches. Many environmental factors such as the size of the plastic and the strength of currents affect how much is washed up. Additionally, many beaches are frequented by tourists and beach goers who may leave behind plastic. This makes tracking ocean plastics vs. general littering difficult.  </p>
        </div>
        <Card class="oceancardmacro oceanbeach"></Card>
      </div>
      <div className="ocean_macro_cards">
      <Card class="oceancardmacro oceangyro"></Card>
        <div className="ocean_macro_cards_txt">
        <p className="ocean_macro_txt_title">Ocean Gyres</p>
        <p className="description2 macrotxt">Large circulating ocean currents capture and retain plastic particles. These gyres capture and retain plastic particles, but only a small amount remain on the surface. Those that don't remain on the surface are naturally broken down. This is discussed further in our nano and micro adventures !</p>
        </div>
        </div>
        <p className="description2 macrotxt">Get Involved with beach cleanups!</p>
        <a className="links macrotxt" href="https://www.budgetdumpster.com/blog/diy-plastic-bottles-recycling/ ">beach cleanup </a>
         <a className="links macrotxt" href="https://www.hometalk.com/29761014/s-30-useful-ways-to-reuse-plastic-bottles">beach cleanup</a>
      </div>
    );
}

export default Macro;

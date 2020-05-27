import React from 'react';
import bins from './assets/bins.jpg'
import binstrash from './assets/binstrash.jpg'
import binsdump from './assets/binsdump.jpg'
import binsrecycle from './assets/binsrecycle.jpg'
import binsbackpck from './assets/binsbackpack.jpg'
import './Macro.css'


const Macro = (myRef) => {
    return (
      <div className="main_div_macro">
      <div className="scene_container">
         <h1 className="macrotxttitle"> The Journey of Macro-Plastics</h1>
          <p className="macrotxt">Macro plastics are defined as plastics with a diameter greater than 5mm in size. That's about the size of the diameter of a common plastic straw. </p>
          <a id="area" className="area1" href="/plasticpollution/#/MacroRecycle"></a>
          <a id="area" className="area2" href="/plasticpollution/#/Macro2"></a>
          <a id="area" className="area3" href="/plasticpollution/#/MacroReuse"></a>
          <a id="area" className="area4" href="/plasticpollution/#/MacroDump"></a>
          <img className="scene" ></img>
          <div id="d0"></div>
          <p id="d1"className="macrotxtdesc">This bin is for clean recyclable products ONLY. Aluminum, paper, glass, and plastic. </p>
          <p id="d2"className="macrotxtdesc">When in doubt, throw it out. This bin is for anything else besides clean aluminum, paper, glass, or plastic.</p>
          <p id="d3"className="macrotxtdesc">Take the plastic with you for reuse later on. </p>
          <p id="d4"className="macrotxtdesc">Leave it on the ground, it’s not your responsibility anyway.</p>
   
      </div>
      </div>

    );
}

export default Macro;

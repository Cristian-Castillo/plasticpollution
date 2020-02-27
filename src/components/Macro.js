import React from 'react';
import bins from './assets/bins.jpg'
import binstrash from './assets/binstrash.jpg'
import binsdump from './assets/binsdump.jpg'
import binsrecycle from './assets/binsrecycle.jpg'
import binsbackpck from './assets/binsbackpack.jpg'
import './Macro.css'

var img = document.getElementById('scene');

function hover(element) {

  img.setAttribute('src', {binstrash});
}

function unhover(element) {
  img.setAttribute('src', {bins});
}

const Macro = (myRef) => {
    return (
      <div className="scene_container">
         <h1>Macro Page</h1>
          <p>Macro information</p>
          <img id="scene"  ref={this.myRef} src={bins} className="scene" onMouseOver={hover(this)} onMouseOut={unhover(this)} ></img>
      </div>

    );
}

export default Macro;

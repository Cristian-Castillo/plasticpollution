import React from 'react';
import china from './assets/chinashipping.jpg'
import './Macro2.css'


const Macro = (myRef) => {
    return (
      <div className="main_div_macro">
      <div className="scene_container2">
        <div className='leftcolumn'>
          <div className='buttonContainer'>
            <a className="backButton" href='./plasticpollution/#/MacroRecycle'>&#8249;</a>
          </div>
        </div>
        <div className="middle">
          <h1 className="macrotxttitle"> Shipped to China</h1>
          <p className="macrotxt">Macro information</p>
          <img  src={china} ></img>

        </div>
        <div className='rightcolumn'>
          <div className='buttonContainer'>
            <a className="finishButton" href='/'>Finish</a>
          </div>
        </div>
        
      </div>
      <div>
        <p className="description2 macrotxt">Broadly, there are two major ways to recycle plastic: (1) mechanical recycling ("chop and wash"), where the plastic is washed, ground into powders and melted, and (2) chemical recycling (things such as pyrolysis), where the plastic is broken down into basic components. (From Wikipedia: source cited: https://resource-recycling.com/plastics/2019/09/05/indorama-will-invest-to-meet-increased-rpet-demand/). 
Lets talk about a few more recycling misconceptions. 
In the past, China accepted a large amount of our recycling, but recent purity standards made it so much of this is being rejected. Now, our contaminated recycling is being sent to other areas in Asia. 
Recycled materials still require new, virgin plastic to make products. This means that even a bottle made with recycled plastic is still contributing to net world plastic increase. 
 </p>
      </div>
      </div>
    );
}

export default Macro;

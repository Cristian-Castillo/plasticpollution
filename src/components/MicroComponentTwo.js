import React from 'react';
import  './Micro.css'
import {Spring } from 'react-spring/renderprops';

const MicroComponentTwo = () => {
    return (
       <Spring
       from ={{ opacity: 0}}
       to ={{ opacity: 1}}
       config = {{delay:1020, duration: 1020}}
       >
        {props => (
          <div style= {props}>

          <div className="backgroundMicroC2 parallaxMicro">
            <h1 className ="colorTextMicro">Begin A Micro Adventure</h1>
          </div>
          <div className ="paraDivMicro">
          <p className ="introInfoMicro">
          For human health, it is the smallest particles – micro- and nano-particles which are small enough to be ingested – that are of greatest concern. There are several ways by which plastic particles can be ingested: orally through water, consumption of marine products which contain microplastics, through the skin via cosmetics (identified as highly unlikely but possible), or inhalation of particles in the air.
          </p>
          </div>


          </div>
        )}
       </Spring>


    );
}

export default MicroComponentTwo;
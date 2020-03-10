import React from 'react';
import NanoCss from './Nano.css'
import { Spring } from 'react-spring/renderprops';
import NanoFlipCardComponent from './NanoFlipCardComponent';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const NanoComponentTwo = () => {
    return (
       <Spring
       from ={{ opacity: 0}}
       to ={{ opacity: 1}}
       config = {{delay:1020, duration: 1020}}
       >
        {props => (
          <div style= {props} className ="backColor">
          <div className="backgroundNanoC2 parallax">
            <h1 className ="colorText">Begin A Nano Adventure</h1>
          </div>
          <div className ="paraDiv">
          <p className ="introInfo">
          For human health, it is the smallest particles – micro- and nano-particles which are small enough to be ingested – that are of greatest concern. There are several ways by which plastic particles can be ingested: orally through water, consumption of marine products which contain microplastics, through the skin via cosmetics (identified as highly unlikely but possible), or inhalation of particles in the air.
          </p>
          </div>
          <div>
            <NanoFlipCardComponent />
          </div>

          </div>
        )}
       </Spring>
    );
}

export default NanoComponentTwo;

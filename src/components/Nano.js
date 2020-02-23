import React from 'react';
import NanoCss from './Nano.css'
import NanoComponentTwo from './NanoComponentTwo';
import { Spring } from 'react-spring/renderprops';


const Nano = () => {
    return (
       <Spring from ={{ opacity: 0, marginTop: -500}}
               to ={{ opacity: 1, marginTop:0 }}>
        {props => (

          <div style= {props}>
          <div className="backgroundNano parallax">
          </div>
          <div className="backgroundNano parallax">
          </div>
          <NanoComponentTwo />
          </div>
        )}
       </Spring>


    );
}

export default Nano;

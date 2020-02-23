import React from 'react';
import NanoCss from './Nano.css'
import { Spring } from 'react-spring/renderprops';

const NanoComponentTwo = () => {
    return (
       <Spring
       from ={{ opacity: 0}}
       to ={{ opacity: 1}}
       config = {{delay:1020, duration: 1020}}
       >
        {props => (
          <div style= {props}>

          <div className="backgroundNanoC2 parallax">
            <h1 className ="colorText">Begin A Nano Adventure</h1>
          </div>


          </div>
        )}
       </Spring>


    );
}

export default NanoComponentTwo;

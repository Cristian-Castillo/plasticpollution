import React from 'react';
import NanoCss from './Nano.css'
import { Spring } from 'react-spring/renderprops';

const NanoComponentTwo = () => {
    return (
       <Spring
       from ={{ opacity: 0}}
       to ={{ opacity: 1}}
       config = {{delay:1000, duration: 1000}}
       >
        {props => (
          <div style= {props}>


          <div className="backgroundNanoC2">
             <h1>Begin A Nano Adventure</h1>
          </div>


          </div>
        )}
       </Spring>


    );
}

export default NanoComponentTwo;

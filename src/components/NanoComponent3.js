import React from 'react';
import NanoCss from './Nano.css'
import { Spring } from 'react-spring/renderprops';
import {useSpring} from 'react-spring';

const NanoComponent3 = () => {


    return (
       <Spring
       from ={{ opacity: 0}}
       to ={{ opacity: 1}}
       config = {{delay:1000, duration: 1000}}
       >
        {props => (
          <div style= {props}>


          </div>
        )}
       </Spring>


    );
}

export default NanoComponent3;

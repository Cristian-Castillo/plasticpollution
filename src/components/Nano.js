import React from 'react';
import NanoCss from './Nano.css'
import NanoComponentTwo from './NanoComponentTwo';
import NanoComponent3 from './NanoComponent3';
import { Spring } from 'react-spring/renderprops';
import {useSprings, animated} from 'react-spring';

const Nano = () => {
    return (
       <Spring from ={{ opacity: 0, marginTop: -500}}
               to ={{ opacity: 1, marginTop:0 }}>
        {props => (
          <div style= {props}>

          <div className="backgroundNano">
             <h1>Welcome</h1>
             <Spring>

             </Spring>
          </div>

          <NanoComponentTwo />
          <NanoComponent3 />
          </div>
        )}
       </Spring>



    );
}

export default Nano;

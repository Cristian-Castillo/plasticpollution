import React from 'react';
import NanoCss from './Nano.css'
import NanoComponentTwo from './NanoComponentTwo';
import { Spring } from 'react-spring/renderprops';
import {Transition} from 'react-spring/renderprops'
import {useTransition} from 'react-spring'
import {useSprings, animated} from 'react-spring'
import {Trail} from 'react-spring/renderprops'


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
          <div>

          </div>
        </div>
        )}
       </Spring>
    );
}


export default Nano;

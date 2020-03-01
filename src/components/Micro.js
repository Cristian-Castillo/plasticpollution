import React from 'react';
import MicroCss from './Micro.css'
import MicroComponentTwo from './MicroComponentTwo';
import { Spring } from 'react-spring/renderprops';
import {Transition} from 'react-spring/renderprops'
import {useTransition} from 'react-spring'
import {useSprings, animated} from 'react-spring'
import {Trail} from 'react-spring/renderprops'

const Micro = () => {
    return (
<Spring from ={{ opacity: 0, marginTop: -500}}
             to ={{ opacity: 1, marginTop:0 }}>
      {props => (

      <div style= {props}>
        <div className="backgroundMicro parallax">
        </div>
        <div className="backgroundMicro parallax">
        </div>
        <MicroComponentTwo />
        <div>

        </div>
        <div className="parallaxOrigin">
        </div>
        <button className="microButton"> Begin Journey </button>

        <div className ="microInfo">
        <h1> Micro Plastics</h1>
        <p className ="passageOrigin">info on micros </p>
        </div>

      </div>
      )}
     </Spring>
  );

}

export default Micro;

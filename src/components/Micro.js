import React from 'react';
import MicroCss from './Micro.css'
import MicroComponentTwo from './MicroComponentTwo';
import Nav from 'react-bootstrap/Nav';
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
        <div>
        <MicroComponentTwo/>
        </div>

        <div className="bigCont">
        <div className="oceanCont"> 
          <div className="parallaxOriginM OceanImg"></div>
          <div className ="microInfo oceanInfo">
          <h2> Micro Plastics in the Ocean</h2>
          <p className ="passageOrigin">info on micros in ocean </p>
          <button className="microButton"><Nav.Link href="/Ocean">Dive into a Micro Ocean Adventure </Nav.Link></button>
          </div>
          </div>

          <div className="oceanCont"> 
          <div className="parallaxOriginM GrassImg"></div>
          <div className ="microInfo oceanInfo">
          <h2> Micro Plastics on Land</h2>
          <p className ="passageOrigin">info on micros on land </p>
          <button className="microButton"> Be a micro on land </button>
          </div>
          </div>

          </div>

     
      </div>
      )}

     </Spring>
  );

}

export default Micro;

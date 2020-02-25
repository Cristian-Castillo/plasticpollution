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
        <div className="parallaxOrigin">
        </div>
        <button className="nanoButton"> Begin Journey </button>

        <div className ="nanoInfo">
        <h1> Nano Plastics</h1>
        <p className ="passageOrigin">Plastic litters have become the predominant components of marine debris due to extensive consumption plastics and mismanagement of plastic wastes. As part of the problem, microplastics (MPs) and nanoplastics (NPs) have generated special concerns due to their unique features that make them easy to transfer among oceans in the marine ecosystem, across different trophic levels inside the food web, and even across different tissues inside contaminated animals. Studies have demonstrated the almost omnipresence of MPs in the marine ecosystem, which present serious threats to the health of marine animals, causing symptoms such as malnutrition, inflammation, chemical poisoning, growth thwarting, decrease of fecundity, and death due to damages at individual, organ, tissue, cell, and molecule levels. </p>
        </div>



      </div>
      )}
     </Spring>
  );

}


export default Nano;

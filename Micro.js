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
          <p className ="passageOrigin">Lorem ipsum dolor sit amet, te mei

In putant fabulas vix, in mea cibo nullam. Case vulputate nesarchum moderatius est. Sea ex quod vero. An munere numquam quaestio duo. Postea equidem gloriatur vis ne, ne harum essent forensibus usu, esse essent epicurei ne qui. </p>
          <button className="microButton"><Nav.Link href="/Ocean">Dive into Adventure </Nav.Link></button>
          </div>
          </div>

          <div className="oceanCont"> 
          <div className="parallaxOriginM GrassImg"></div>
          <div className ="microInfo oceanInfo">
          <h2> Micro Plastics on Land</h2>
          <p className ="passageOrigin">Lorem ipsum dolor sit amet, te mei petentium efficiendi, te platonem iudicabit sea. Affert accusamus dissentiunt cu vel, ex vel minim nominavi disputationi. Ex mel dolorum recteque, cu cum torquatos interesset. Tempor doctus explicari vis in. Fugit clita in vel, usu ne quas delenit. Ut eros duis qualisque nam, ei vel paulo civibus. Est nostro senserit intellegat et.

In putant fabulas vix, in mea cibo nullam. Case vulputate no vel, eu aliquip utroque convenire duo, te veri mnesarchum moderatius est. Sea ex quod vero. An munere numquam quaestio duo. Postea equidem gloriatur vis ne, ne harum essent forensibus usu, esse essent epicurei ne qui. </p>
          <button className="microButton"> Journey through Land </button>
          </div>
          </div>

          </div>

     
      </div>
      )}

     </Spring>
  );

}

export default Micro;

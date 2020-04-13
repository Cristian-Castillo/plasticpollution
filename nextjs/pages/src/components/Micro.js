import React from 'react';
import './Micro.css'
import MicroComponentTwo from './MicroComponentTwo';
import Nav from 'react-bootstrap/Nav';
import { Spring } from 'react-spring/renderprops';

const Micro = () => {
    return (
<Spring from ={{ opacity: 0, marginTop: -500}}
             to ={{ opacity: 1, marginTop:0 }}>
      {props => (

      <div  className="title_backgroundMicro" style= {props}>
        <div className="backgroundMicro parallaxMicro">
        </div>
        <div className="backgroundMicro parallaxMicro">
        </div>
        <div>
        <MicroComponentTwo/>
        </div>

        <div className="bigContMicro">
        <div className="oceanContMicro"> 
          <div className= "OceanImgMicro"></div>
          <div className ="microInfoMicro oceanInfoMicro">
          <h2> Micro Plastics in the Ocean</h2>
          <p className ="passageOriginMicro">Lorem ipsum dolor sit amet, te mei

In putant fabulas vix, in mea cibo nullam. Case vulputate nesarchum moderatius est. Sea ex quod vero. An munere numquam quaestio duo. Postea equidem gloriatur vis ne, ne harum essent forensibus usu, esse essent epicurei ne qui. </p>
          <button className="microButtonMicro"><Nav.Link href="/Ocean">Dive into Adventure </Nav.Link></button>
          </div>
          </div>

          <div className="oceanContMicro"> 
          <div className="GrassImgMicro"></div>
          <div className ="microInfoMicro oceanInfoMicro">
          <h2> Micro Plastics on Land</h2>
          <p className ="passageOriginMicro">Lorem ipsum dolor sit amet, te mei petentium efficiendi, te platonem iudicabit

In putant fabulas vix, in mea cibo nullam. Case vulputate no vel, eu aliquip utroque convenire duo, te veri mnesarchum moderatius est. Sea ex quod vero. An munere numquam quaestio duo. Postea equidem gloriatur vis ne, ne harum essent forensibus usu, esse essent epicurei ne qui. </p>
          <button className="microButtonMicro"><Nav.Link href="/Ocean">Journey through Land</Nav.Link> </button>
          </div>
          </div>

          </div>

     
      </div>
      )}

     </Spring>
  );

}

export default Micro;

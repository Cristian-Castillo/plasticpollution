import React from 'react';
import NanoCss from './Nano.css'
import { Spring } from 'react-spring/renderprops';

const NanoFlipCardComponent = () => {
    return (
       <Spring
       from ={{ opacity: 0}}
       to ={{ opacity: 1}}
       config = {{delay:1020, duration: 1020}}
       >
        {props => (
          <div class="maincontainer">
          <div class="thecard">
          <div class="thefront">
          <h1>Front of Card</h1><p>This is the front of the card. It contains important information. Please see overleaf for more details.</p></div><div class="theback">
          <h1>Back of Card</h1>
          <p>Your use of this site is subject to the terms and conditions governing this and all transactions.</p>
          <button>Submit</button></div></div>
          </div>
        )}
       </Spring>
    );
}

export default NanoFlipCardComponent;

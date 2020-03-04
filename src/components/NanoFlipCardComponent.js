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
          <div className="container">

          <div class="maincontainer">
          <div class="thecard">
          <div class="thefront">
          </div>
          <div class="theback">
          <h1>Human Nano Consumption</h1>
          <p>Take a journey and see how nano consumption travels from the ocean into our bodies!</p>
          <button>Begin Journey</button>
          </div>
          </div>
          </div>

          <div class="maincontainerTwo">
          <div class="thecardTwo">
          <div class="thefrontTwo">
          </div>
          <div class="thebackTwo">
          <h1>The Nano Evaporation</h1>
          <p>Take a journey and see how Nano Plastics impact our enviroment</p>
          <button>Begin Journey</button>
          </div>
          </div>
          </div>

          <div class="maincontainerThree">
          <div class="thecardThree">
          <div class="thefrontThree">
          </div>
          <div class="thebackThree">
          <h1>Nano Prevention</h1>
          <p>Take a an exciting journey to see what it takes to do your part to help combat Nano Plastics</p>
          <button>Begin Journey</button>
          </div>
          </div>
          </div>

          </div>
        )}
       </Spring>
    );
}

export default NanoFlipCardComponent;

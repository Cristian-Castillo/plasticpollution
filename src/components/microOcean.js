import React from 'react';
import MicroOceanCss from './microOcean.css'
import Turtle from './turtle';
import TurtleMove from './turtleAnimation';

const MicroOcean = () => {
    return <div className="main-div">
      <div className="container_grid">
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
      <div className="container_grid">
      <div class="ocean">
        <TurtleMove/>
  </div>
  </div>
  </div>
}


export default MicroOcean;
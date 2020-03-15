import React from 'react';
import MicroOceanCss from './microOcean.css'   
import TurtleMove from './turtleAnimation';
import BagPopUp from './microPopBoxBag';
import NetFloat from './microNet';
import BagFloat from './plasticBag';
import MicroFloat from './microPiece';

const MicroOcean = () => {
    return <div className="main-div">
      <div className="container_grid">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div className="container_grid">
      <div className="ocean">
      <TurtleMove></TurtleMove>
      <BagFloat></BagFloat>
      </div>
      </div>
    </div>
}


export default MicroOcean;
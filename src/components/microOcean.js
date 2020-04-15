import React from 'react';
import MicroOceanCss from './microOcean.css'   
import TurtleMove from './turtleAnimation';
import BagPopUp from './microPopBoxBag';
import ManyMicroFloat from './microMedium';
import NetFloat from './microNet';
import BagFloat from './plasticBag';
import MicroFloat from './microPiece';
import singleMicro from './microSingle';
import oceanCarousel from './carouselForMicroOcean'

const MicroOcean = () => {
    return <div className="main-divMicro">
      <div className="container_grid">
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div className="oceanMain">
      <TurtleMove/>
      <BagPopUp title="popoverBag"/>
      <BagPopUp title="popoverMicro"/>
      <BagPopUp title="popoverNet"/>
      <div className="depthContainer650"><h2 className="MarianaText">650ft</h2></div>
      <div className="containerForMicrosTop"><ManyMicroFloat/><ManyMicroFloat/></div>
      <div className="containerForMicrosBottom"><ManyMicroFloat/><ManyMicroFloat/></div>

      <div className="containerForMicrosTxt">{oceanCarousel}</div>
      <div className="depthContainer2000"><h2 className="MarianaText">2000ft</h2></div>
      <div className="depthContainer36000"><h2 className="MarianaText">36,000ft</h2></div>

      </div>
      </div>

}


export default MicroOcean;
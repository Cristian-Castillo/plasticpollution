import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import MicroOceanCss from './microOcean.css' 


const oceanCarousel = (
   <Carousel indicators={false} interval={0} prevIcon={false}>
  <Carousel.Item>
    <h2 className="MarianaText textinwater">The highest concentration of micros in the ocean is between 650ft and 2000ft deep</h2>
  </Carousel.Item>
  <Carousel.Item>
      <div className="slider_cont">
      <img className="slider_img" src="https://chiletoday.cl/site/wp-content/uploads/2019/12/cleaningofthepacificgarbagepatch-900x675.jpg" alt="Paris"/>
      <h2 className="MarianaText textinwater2"> The amount of plastic that can be found here is comparable to the amount of plastic found in the Great Pacific Patch</h2>
    </div>

  </Carousel.Item>
</Carousel>)

export default oceanCarousel;
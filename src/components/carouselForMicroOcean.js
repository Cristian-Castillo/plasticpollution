import React from 'react';
import Carousel from 'react-bootstrap/Carousel'


const oceanCarousel = (
   <Carousel indicators={false} interval={0} prevIcon={false}>
  <Carousel.Item>
    <h2 className="MarianaText textinwater">The highest concentration of micros in the ocean is between 650ft and 2000ft deep</h2>
  </Carousel.Item>
  <Carousel.Item>
      <div className="">
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Third slide"
    />
    </div>

  </Carousel.Item>
</Carousel>)

export default oceanCarousel;
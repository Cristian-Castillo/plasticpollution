import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


const home = () => {
    let parallax;
    return (
        <Parallax pages={2} scrolling= {true} vertical ref={ref => parallax = ref}>
            <ParallaxLayer offset={0.3} speed={0}>
                <span>{slider}</span>
            </ParallaxLayer>
        </Parallax>
    );
}

const AutoplaySlider = withAutoplay(AwesomeSlider);
 
const slider = (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}>
    <div><img style = {{height: '100%', width: '100%'}} src ={require('../assets/lotsOfPlastic.jpg')} ></img></div>
    <div><img style = {{height: '100%', width: '100%'}} src={require('../assets/platicBottle.jpg')}/></div>
  </AutoplaySlider>
);


export default home;

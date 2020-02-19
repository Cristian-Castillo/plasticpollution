import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';


const home = () => {
    let parallax;
    return (
        <Parallax pages={4} scrolling= {true} vertical ref={ref => parallax = ref} style= {{background: '#4f4f4f'}} >
            <ParallaxLayer offset={0} speed={0}>
                <span>{slider}</span>
            </ParallaxLayer>
            <ParallaxLayer offset={1.2} speed= {0.5}>
                <div style={{position: 'absolute', width: '100%'}}>
                <h1 style= {{fontSize: 50, fontFamily: 'Orbitron', color: 'white' }}> We produce about 300 million tons of plastic per year</h1>
                <iframe src="https://ourworldindata.org/grapher/global-plastics-production" style={{ margin: 50, width: '90%', height: 600, border: '0 none'}}></iframe>
                </div>

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
    <div>
        <img style = {{height: '100%', width: '100%', position: 'relative'}} src ={require('../assets/lotsOfPlastic.jpg')} ></img>
        <h1 style= {{ fontSize: 100, color: 'white', fontFamily: 'Orbitron', position:'absolute', width: '100%', top: 200, textAlign: 'center'}}>In a world full of plastic</h1>
    </div>
    <div>
        <img style = {{height: '100%', width: '100%'}} src={require('../assets/platicBottle.jpg')}/>
        <h1 style= {{ fontSize: 100, color: 'white', fontFamily: 'Orbitron', position:'absolute', width: '100%', top: 200, textAlign: 'center'}}>What's YOUR impact?</h1>
        </div>
  </AutoplaySlider>
);


export default home;

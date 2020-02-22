import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import 'react-awesome-slider/dist/styles.css';


const home = () => {
    let parallax;
    return (
        <Parallax pages={4} scrolling= {true} vertical ref={ref => parallax = ref} style= {{background: '#4f4f4f'}} >
            <ParallaxLayer offset={0} speed={0}>
                <span>{slider}</span>
            </ParallaxLayer>
            <ParallaxLayer offset={1.1} speed= {0.5}>
                <div style={{position: 'absolute', width: '100%'}}>
                <div>
                <h1 style= {{fontSize: 50, fontFamily: 'Orbitron', color: 'white' }}> We produce about 300 million tons of plastic per year</h1>
                <iframe src="https://ourworldindata.org/grapher/global-plastics-production" style={{ margin: 50, width: '90%', height: 600, border: '0 none'}}></iframe>
                <h1 style= {{fontSize: 50, fontFamily: 'Orbitron', color: 'white' }}> 17.6 billion pounds of plastic leaks into the marine environment from land-based sources every year</h1>
                </div>
                </div>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={0.5}>
                <div class="article-container">
                    <div class="article">
                        <h3 style= {{fontSize: 50, fontFamily: 'Orbitron', color: 'white' }}>Macros</h3>
                        <p>words</p>
                        <Button variant="outlined" color="white">
                            Start Macro Adventure
                        </Button>
                    </div>
                    <div class="article">
                        <img style = {{height: '100%', width: '100%'}} src ={require('../assets/macro.jpg')} ></img>
                    </div>
                </div>
                <div class="article-container">
                    <div class="article">
                        <img style = {{height: '100%', width: '100%'}} src ={require('../assets/micro.jpg')} ></img>
                    </div>
                    <div class="article">
                        <h3 style= {{fontSize: 50, fontFamily: 'Orbitron', color: 'white' }}>Micros</h3>
                        <p>words</p>
                        <Button variant="outlined" color="white">
                            Start Micro Adventure
                        </Button>
                    </div>
                </div>
                <div class="article-container">
                    <div class="article">
                        <h3 style= {{fontSize: 50, fontFamily: 'Orbitron', color: 'white' }}>Nanos</h3>
                        <p>words</p>
                        <Button variant="outlined" color="white">
                            Start Nano Adventure
                        </Button>
                    </div>
                    <div class="article">
                        <img style = {{height: '100%', width: '100%'}} src ={require('../assets/nano.jpg')} ></img>
                    </div>
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

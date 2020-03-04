import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Button from '@material-ui/core/Button';
import Nav from 'react-bootstrap/Nav';
import 'react-awesome-slider/dist/styles.css';
import Home from './Home.css'
import Counter from './TimeCounterComponent';
import {useSpring, animated} from 'react-spring';
import CounterContainer from './containerForCounterComp';



const home = () => {
    let parallax;
    return (
        <Parallax pages={6} scrolling= {true} vertical ref={ref => parallax = ref} style= {{background: '#4f4f4f'}} >
            <ParallaxLayer offset={0} speed={0}>
                <span>{slider}</span>
            </ParallaxLayer>
            <ParallaxLayer offset={1.2} speed= {1}>
                <Infographics/>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={1}>
                <CounterContainer/>
            </ParallaxLayer>
            <ParallaxLayer offset={2.5} speed={1}>
                <ContainerWithtextonRight name= "Macros" namehref= "/Macro" classname = "card macroCard" url={require('../assets/macro.jpg')} text="words"/>
                <ContainerWithtextonLeft/>
                <ContainerWithtextonRight name= "Nanos" namehref= "/Nano" classname = "card nanoCard" url={require('../assets/nano.jpg')} text="words"/>
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

  function Infographics(props){
      return  <div style={{position: 'absolute', width: '100%'}}>
      <div>
      <h1 style= {{fontSize: 50, fontFamily: 'Orbitron', color: 'white' }}> We produce about 300 million tons of plastic per year</h1>
      <iframe src="https://ourworldindata.org/grapher/global-plastics-production" style={{ margin: 50, width: '90%', height: 600, border: '0 none'}}></iframe>
      <h1 style= {{fontSize: 50, fontFamily: 'Orbitron', color: 'white' }}> 17.6 billion pounds of plastic leaks into the marine environment from land-based sources every year</h1>
      </div>
      </div>;
  }

  function ContainerWithtextonRight(props){
      return      <div class="article-container">
      <div class="article">
          <h3 style= {{fontSize: 50, fontFamily: 'Orbitron', color: 'white' }}>{props.name}</h3>
          <p>{props.text}</p>
          <p className ="backgroundButtonColor">
          <Button color="light" >
            <Nav.Link href={props.namehref} className ="buttonColor">Start {props.name} Adventure</Nav.Link>
          </Button>
          </p>
      </div>
      <div class="article">
        <Card class = {props.classname}/>
      </div>
  </div>;
  }
  function ContainerWithtextonLeft(props){
      return <div class="article-container">
      <div class="article">
          <Card class = "card microCard"/>
      </div>
      <div class="article">
          <h3 style= {{fontSize: 50, fontFamily: 'Orbitron', color: 'white' }}>Micros</h3>
          <p>words</p>
          <p className ="backgroundButtonColor">
          <Button color ="white" >
                <Nav.Link href="/Micro" className ="buttonColor A">Start Micro Adventure</Nav.Link>
          </Button>
          </p>
      </div>
  </div>;
  }

  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
  const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
  
  function Card(features) {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
      <animated.div
        class= {features.class}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      />
    )
  }

export default home;

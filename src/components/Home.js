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
import {Route, Link} from 'react-router-dom';



const home = () => {
    let parallax;
    return (
        <Parallax pages={3.2} scrolling= {true} vertical ref={ref => parallax = ref} className="homeBody">
            <ParallaxLayer offset={0} speed={0}>
                <span classname="slideshowContainer">{slider}</span>
            </ParallaxLayer>
            <ParallaxLayer offset={1.2} speed= {1}>
                <Infographics/>
            </ParallaxLayer>
            <ParallaxLayer offset={1.999} speed={.3}>
                <CounterContainer/>
            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={4}>
                <ContainerWithtextonRight name= "Macros" namehref= "/plasticpollution/#/Macro" classname = "card macroCard" url={require('../assets/macro.jpg')} text="Lorem ipsum dolor sit amet, te mei petentium efficiendi, ei mel aeque ornatus insolens, te platonem iudicabit sea. Affert accusamus dissentiunt cu vel, ex vel minim nominavi disputationi. Ex mel dolorum recteque, cu cum torquatos interesset. Tempor doctus explicari vis in. Fugit clita in vel, usu ne quas delenit. Ut eros duis qualisque nam, ei vel paulo civibus. Est nostro senserit intellegat et.

In putant fabulas vix, in mea cibo nullam. Case vulputate no vel, eu aliquip utroque convenire duo, te veri mnesarchum moderatius est. Sea ex quod vero. An munere numquam quaestio duo. Postea equidem gloriatur vis ne, ne harum essent forensibus usu, esse essent epicurei ne qui."/>
                <ContainerWithtextonLeft/>
                <ContainerWithtextonRight name= "Nanos" namehref= "/plasticpollution/#/Nano" classname = "card nanoCard" url={require('../assets/nano.jpg')} text="Lorem ipsum dolor sit amet, te mei petentium efficiendi, ei mel aeque ornatus insolens, te platonem iudicabit sea. Affert accusamus dissentiunt cu vel, ex vel minim nominavi disputationi. Ex mel dolorum recteque, cu cum torquatos interesset. Tempor doctus explicari vis in. Fugit clita in vel, usu ne quas delenit. Ut eros duis qualisque nam, ei vel paulo civibus. Est nostro senserit intellegat et.

In putant fabulas vix, in mea cibo nullam. Case vulputate no vel, eu aliquip utroque convenire duo, te veri mnesarchum moderatius est. Sea ex quod vero. An munere numquam quaestio duo. Postea equidem gloriatur vis ne, ne harum essent forensibus usu, esse essent epicurei ne qui."/>
            </ParallaxLayer>
        </Parallax>
    );
}

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <AutoplaySlider
    bullets={false}
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}>
    <div className="slideshowContainer">
        <img style = {{height: '100%', width: '100%', position: 'relative'}} src ={require('../assets/lotsOfPlastic.jpg')} ></img>
        <h1 style= {{ fontSize: 100, color: 'white', fontFamily: 'Orbitron', position:'absolute', width: '100%', top: 200, textAlign: 'center'}}>In a world full of plastic</h1>
    </div>
    <div className="slideshowContainer">
        <img style = {{height: '100%', width: '100%'}} src={require('../assets/platicBottle.jpg')}/>
        <h1 style= {{ fontSize: 100, color: 'white', fontFamily: 'Orbitron', position:'absolute', width: '100%', top: 200, textAlign: 'center'}}>What's YOUR impact?</h1>
        </div>
  </AutoplaySlider>
);

  function Infographics(props){
      return  <div className= "infoContainer">
      <iframe src="https://ourworldindata.org/grapher/global-plastics-production" className="infograph"></iframe>
      <div className="infoTextContainer">
        <h3 className="titleforinfo">Plastic Production</h3>
        <b></b>
        <p className="parforinfo"> We produce about 300 million tons of plastic per year. 17.6 billion pounds of plastic leaks into the marine environment from land-based sources every year</p>
        </div>
      </div>;
  }

  function ContainerWithtextonRight(props){
      return  <div class="plasticContainer">
        <div className="article">
        <p className="articleText">
          <h3>{props.name}</h3>
          <p className="articleText">{props.text}</p>
          <p className ="backgroundButtonColor">
          <Button color="light" >
            <Nav.Link href={props.namehref} className ="buttonColor">Start {props.name} Adventure</Nav.Link>
          </Button>
          </p>
      </p>
      </div>
      <div class="articleC">
        <Card class = {props.classname}/>
      </div>
  </div>;
  }
  function ContainerWithtextonLeft(props){
      return <div class="plasticContainer">
      <div class="articleC">
          <Card class = "card microCard"/>
      </div>
      <div class="article">
      <p className="articleText">
          <h3 >Micros</h3>
          <p className="articleText">Lorem ipsum dolor sit amet, te mei petentium efficiendi, ei mel aeque ornatus insolens, 
            te platonem iudicabit sea. Affert accusamus dissentiunt cu vel, ex vel minim nominavi disputationi. 
            Ex mel dolorum recteque, cu cum torquatos interesset. Tempor doctus explicari vis in. 
            Fugit clita in vel, usu ne quas delenit. 
            Ut eros duis qualisque nam, ei vel paulo civibus. Est nostro senserit intellegat et.
In putant fabulas vix, in mea cibo nullam. Case vulputate no vel, eu aliquip utroque convenire duo, 
te veri mnesarchum moderatius est. Sea ex quod vero. An munere numquam quaestio duo. Postea equidem 
gloriatur vis ne, ne harum essent forensibus usu, esse essent epicurei ne qui.</p>
          <p className ="backgroundButtonColor">
          <Button color="light" >
          <Nav.Link href="/plasticpollution/#/Micro" className ="buttonColor A">Start Micro Adventure</Nav.Link>
          </Button>
          </p>
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

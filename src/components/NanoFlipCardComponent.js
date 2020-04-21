import NanoCss from './Nano.css'
import { Spring } from 'react-spring/renderprops';
import React from 'react';
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Button from '@material-ui/core/Button';
import Nav from 'react-bootstrap/Nav';
import 'react-awesome-slider/dist/styles.css';
import Home from './Home.css'
import {useSpring, animated} from 'react-spring';
import CounterContainer from './containerForCounterComp';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NanoFlipCardComponent = () => {
    return (
          <div>
<Container className="containerNano">
  <Row>
    <Col>
    <div class="maincontainer">
          <div class="thecard">
          <div class="thefront">
          </div>
          <div class="theback">
          <h1>Human Nano Consumption</h1>
          <p>Take a journey and see how nano consumption travels from the ocean into our bodies!</p>
          <button><Nav.Link href="/plasticpollution/#/HumanConsumptionNano" className ="buttonColor A">Begin Journey</Nav.Link></button>
          </div>
          </div>
          </div></Col>
        </Row>
        </Container>
          </div>

    );
}

export default NanoFlipCardComponent;

import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import MicroOceanCss from './microOcean.css'
import BagFloat from './plasticBag';
import NetFloat from './microNet';
import MicroFloat from './microPiece';
import Button from '@material-ui/core/Button';


export default function BagPopUp(props) {

    const title = props.title

    const popoverBag =
        <div className="popoverbox">
            <h3>Macros eventually become micros</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum. Ullamcorper sit amet risus nullam eget. Volutpat sed cras ornare arcu dui vivamus</p>
            <img  src="https://static1.squarespace.com/static/54d3a62be4b068e9347ca880/t/566a048869a91a506fec43ee/1449788556521/?format=1500w" className="popoverImg"></img>
        </div>;

  const popoverMicro = 
      <div className="popoverbox">
        <h3> Marine animals consume free microplastics, with varying effects</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum. Ullamcorper sit amet risus nullam eget. Volutpat sed cras ornare arcu dui vivamus</p>
        <img  src="https://i7.pngguru.com/preview/770/789/275/fishing-net-wedding-invitation-fishing-net-material.jpg" className="popoverImg"></img>
      </div>;

  const popoverNet = 
    <div className="popoverbox">
      <h3> Marine animals consume free microplastics, with varying effects</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum. Ullamcorper sit amet risus nullam eget. Volutpat sed cras ornare arcu dui vivamus</p>
      <img  src="https://i7.pngguru.com/preview/770/789/275/fishing-net-wedding-invitation-fishing-net-material.jpg" className="popoverImg"></img>
    </div>;

    switch(title) {
      case "popoverBag":
        return <OverlayTrigger trigger="click" placement="left" overlay={popoverBag}>
        <Button className= "floatButton"><BagFloat/></Button>
        </OverlayTrigger>
      case "popoverMicro":
        return <><OverlayTrigger trigger="click" placement="top" overlay={popoverMicro}>
        <Button className= "floatButton2">
          <div className="manyMicros">
            <MicroFloat shape="shape1" color="lightblue" />
            <MicroFloat shape="shape2" color="red"/>
            <MicroFloat shape="shape3" color="green"/>
            <MicroFloat shape="shape1" color="red"/>
            <MicroFloat shape="shape1" color="lightblue" />
            <MicroFloat shape="shape2" color="red"/>
            <MicroFloat shape="shape3" color="green"/>
            <MicroFloat shape="shape1" color="red"/>
          </div>
          <div className="manyMicros">
            <MicroFloat shape="shape1" color="yellow" /> 
            <MicroFloat shape="shape2" color="orange"/>
            <MicroFloat shape="shape3" color="red"/>
            <MicroFloat shape="shape1" color="orange"/>
            <MicroFloat shape="shape1" color="yellow" />
            <MicroFloat shape="shape2" color="green"/>
            <MicroFloat shape="shape3" color="purple"/>
            <MicroFloat shape="shape1" color="lightblue"/>
          </div>
          <div className="manyMicros">
            <MicroFloat shape="shape1" color="red" />
            <MicroFloat shape="shape2" color="purple"/>
            <MicroFloat shape="shape3" color="green"/>
            <MicroFloat shape="shape1" color="red"/>
            <MicroFloat shape="shape1" color="yellow" />
            <MicroFloat shape="shape2" color="red"/>
            <MicroFloat shape="shape3" color="purple"/>
            <MicroFloat shape="shape1" color="green"/>
          </div>
          <div className="manyMicros">
            <MicroFloat shape="shape1" color="lightblue" />
            <MicroFloat shape="shape2" color="orange"/>
            <MicroFloat shape="shape3" color="green"/>
            <MicroFloat shape="shape1" color="red"/>
            <MicroFloat shape="shape1" color="yellow" />
            <MicroFloat shape="shape2" color="red"/>
            <MicroFloat shape="shape3" color="purple"/>
            <MicroFloat shape="shape1" color="red"/>
          </div>
        </Button>
        </OverlayTrigger></>
        case "popoverNet":
          return <OverlayTrigger trigger="click" placement="right" overlay={popoverNet}>
          <Button className= "floatButton3"><NetFloat/></Button>
          </OverlayTrigger>
        default: 
          return <><OverlayTrigger trigger="click" placement="left" overlay={popoverBag}>
          <Button className= "floatButton"><BagFloat/></Button>
        </OverlayTrigger></>
    }};
   

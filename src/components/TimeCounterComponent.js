import React from 'react';
import Home from './Home.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import AnimatedThing from './animationComp.js'

const popoverProduction = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Every second 19025lbs of plastic is produced</Popover.Title>
    <Popover.Content as ="h6">
    19025 is about 9US tons. Which is more than the two whole cars every seconds. 
    Or over 285 new cars per minute. 
    <img src='traffic.jpg'></img>
    </Popover.Content>
  </Popover>
);

const popoverCountdown = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Time by the seconds</Popover.Title>
    <Popover.Content>
      This shows the seconds of calculations
    </Popover.Content>
  </Popover>
);

const popoverWaste = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Waste by the second</Popover.Title>
    <Popover.Content>
      This shows how much plastic is being wasted everysecond
    </Popover.Content>
  </Popover>
);

class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        elapsedTime: null,
        productionTime: null,
        WasteTime: null
      };
      this.countUp = this.countUp.bind(this);
      this.countProduction= this.countProduction.bind(this)
      this.countWaste= this.countWaste.bind(this)
      this.startCounting = this.startCounting.bind(this);
      this.startCounting();
    }
  
    startCounting() {
      setInterval(this.countUp, 1000);
      setInterval(this.countProduction, 1000);
      setInterval(this.countWaste, 1000);
    }
  
    countUp() {
      this.setState(({ elapsedTime }) => ({ elapsedTime: elapsedTime + 1 }));
    }

    countProduction(){
        this.setState(({ productionTime }) => ({ productionTime: productionTime + 19025 }));
    }
    countWaste(){
        this.setState(({ WasteTime }) => ({ WasteTime: WasteTime + 558 }));
    }

    render() {
        return <div class="container">
        <div class="circle circleFast">
        <OverlayTrigger trigger="hover" placement="bottom" overlay={popoverProduction}>
            <div class="aligner">
            <div>{this.state.productionTime}<h5>lbs produced</h5></div>
            </div>
            </OverlayTrigger>
        </div>
        <OverlayTrigger trigger="hover" placement="top" overlay={popoverCountdown}>
        <div class="circle circleSlow">
            <div class="aligner">
                <div onload= {this.startCounting}>{this.state.elapsedTime}<h5>seconds</h5></div>
            </div>
        </div>
        </OverlayTrigger>
        <div class="circle circleMed">
        <OverlayTrigger trigger="hover" placement="right" overlay={popoverWaste}>
            <div class="aligner">
            <div>{this.state.WasteTime}<h5>pounds dumped</h5></div>
            </div>
            </OverlayTrigger>
        </div>
        </div>  ;
      }
    }

 
  
  export default Counter;
import React from 'react';
import Home from './Home.css'

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
        <div class="circle">
            <div class="aligner">
            <div>{this.state.productionTime}</div>
            </div>
        </div>
        <div class="circle">
            <div class="aligner">
                <div>{this.state.elapsedTime}</div>
                {!this.state.elapsedTime && (
                <button onClick={this.startCounting}>Start</button>
              )}
            </div>
        </div>
        <div class="circle">
            <div class="aligner">
            <div>{this.state.WasteTime}</div>
            </div>
        </div>
        </div>  ;
      }
     
    }

 
  
  export default Counter;
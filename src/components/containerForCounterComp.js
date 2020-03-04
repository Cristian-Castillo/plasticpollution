import React from 'react';
import Home from './Home.css'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from '@material-ui/core/Button';
import Counter from './TimeCounterComponent';

export default class CounterContainer extends React.Component {
    constructor() {
       super();
       this.state = {
         clicked: false
       };
       this.handleClick = this.handleClick.bind(this);
     }
  
    handleClick() {
      this.setState({
        clicked: true
      });
    }
    InitialStatement(){
        return <div>
            <h1>Plastic Production and Waste by the numbers</h1>
        <p>See how much plastic is being produced and wasted every second.</p>
        <p> 
          <Button color= "lightblue" variant="primary" onClick={this.handleClick}>See the numbers</Button>
        </p>
        </div>
    }
    render () {
        return <Jumbotron>
             {this.state.clicked ? (
          <Counter/>
        ) : (
            this.InitialStatement()
        )}
        </Jumbotron>
    }
}







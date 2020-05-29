import React from 'react';
import './clothes.css'
import WashingMachine from './washingmachine';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Card from './flippableCard';
import Button from '@material-ui/core/Button';
import Nav from 'react-bootstrap/Nav';
import Icon from '@material-ui/core/Icon';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Clothes = () => {

    return <div className="mainDiv">
        <div className="firstDiv">
            <div className="topClothesRack"></div>
            <h2 className="txt titleTxt">Our clothes contribute to the accumulation of microplastics as well in the form of micro-fibers </h2>
        </div>
        <div className="secondDiv">
            <h2 className="txt firstTxt">Polyester, nylon, acrylic, and other synthetic fibers — all of which are forms of plastic — are now about 60 percent of the material that makes up our clothes worldwide</h2>
            <div className="slideshow">{slider}</div>
        </div>
        <div className="laundryDiv">
        <div className="laundry"></div>
            <h2 className="txt laundrytxt">There are estimates of anywhere from a few thousand fibers in a single load of laundry to as much as 10 or 12 million fibers per load of laundry</h2>
        </div>
        <div className="thirdDiv">
            <div className= "washingDiv"><WashingMachine/></div>
            <div className="pipe">
                <div className="micropiece"></div>
                <h2 className="txt washingtxt">There are estimates of anywhere from a few thousand fibers in a single load of laundry to as much as 10 or 12 million fibers per load of laundry</h2>
                <p className= "button"><Button startIcon={<ArrowForwardIosIcon/>}><Nav.Link href="/plasticpollution/#/Wastewater">Continue</Nav.Link></Button></p>
        
            </div>
            </div>
        </div>
};
export default Clothes;

const AutoplaySlider = withAutoplay(AwesomeSlider);

const slider = (
  <AutoplaySlider
    bullets={false}
    play={false}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}>
    <div className="slideshowBox">
        <div className="c nylonimg"><p className="fabrictitle">Nylon</p><p className="fabrictxt">Nylon is a man-made synthetic fiber that is strong while very light in weight, properties that lead to a wide variety of uses, such as fabric, rope and luggage.</p></div>
    </div>
    <div className="slideshowBox">
        <div className="c spandeximg"><p className="fabrictitle">Spandex</p></div>
     </div>
     <div className="slideshowBox">
     <div className="c rayonimg"><p className="fabrictitle">Rayon</p></div>
     </div>
     <div className="slideshowBox">
     <div className="c acrylicimg"><p className="fabrictitle">Acrylic</p></div>
     </div>
     <div className="slideshowBox">
     <div className="c polyimg"><p className="fabrictitle">Polyster</p></div>
     </div>
     <div className="slideshowBox">
     <div className="c acetateimg"><p className="fabrictitle">Acetate</p></div>
     </div>
  </AutoplaySlider>
);
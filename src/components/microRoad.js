import React from 'react';
import './microRoad.css'
import { Button } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const microRoad = () => {
    return <div className="main_road">
    <div className="roadcar">
    <div className="car">
    <div className="wheel back"></div>
    <div className="wheel front"></div>
    </div>
    </div>
    <h2 className="roadtxt bigRoad">MicroRubbers</h2>
    <h2 className="roadtxt smallRoad"> Rainfall washes more than 7 trillion pieces of microplastics, much of it tire particles left behind on streets, into San Francisco Bay each year — an amount 300 times greater than what comes from microfibers washing off polyester clothes, microbeads from beauty products and the many other plastics washing down our sinks and sewers.</h2>
    <div className="picAndButton">
    <img  src="https://assets.nrdc.org/sites/default/files/styles/full_content--retina/public/media-uploads/nedispatch_cso_483166525_ds_2400.jpg?itok=3T3zezEW" className="stormdrain"></img>
    <Button startIcon={<ArrowForwardIosIcon/>} href="/plasticpollution/#/Wastewater" className="roadButton">Continue</Button>
    </div>
    </div>
    

};

export default microRoad;
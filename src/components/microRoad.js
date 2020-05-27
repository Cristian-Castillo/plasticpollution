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
    <h2 className="roadtxt smallRoad">Tire wear and tear is a significant contributor to the flow of microplastics in land, air, and sea. The global average of emissions from tire particles is 0.81 kg/year, which is significantly higher than other sources. The contribution of tire wear to the total amount of ocean microplastic is estimated by some to be between 5-10%, and in the air between 3-7%. Empa researchers found that between 1988 and 2018, 200,000 tons of micro rubbers accumulated in Switzerland's environment. These microrubbers are found in microplastic samples worldwide.  </h2>
    <div className="picAndButton">
    <img  src="https://assets.nrdc.org/sites/default/files/styles/full_content--retina/public/media-uploads/nedispatch_cso_483166525_ds_2400.jpg?itok=3T3zezEW" className="stormdrain"></img>
    <Button startIcon={<ArrowForwardIosIcon/>} href="/plasticpollution/#/Wastewater" className="roadButton">Continue</Button>
    </div>
    </div>
    

};

export default microRoad;
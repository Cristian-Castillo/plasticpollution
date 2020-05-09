import React from 'react';
import './wastewater.css'
import Button from '@material-ui/core/Button';
import Nav from 'react-bootstrap/Nav';
import Icon from '@material-ui/core/Icon';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';




const Wastewater = (myRef) => {
    return (
      <div className="main_container">
          <h2 className="treatment_title">FROM YOUR PIPES TO THE SEWER TO THE WATER TREATMENT FACILITY </h2>
          <h2 className="treatment_txt">Water treatement  </h2>
          <div className="water_facility"></div>
          <p className= "buttonwaste"><Button startIcon={<ArrowForwardIosIcon/>}><Nav.Link href="/plasticpollution/#/Ocean">Continue</Nav.Link></Button></p>
          <div></div>

         
      </div>

    );
}

export default Wastewater;
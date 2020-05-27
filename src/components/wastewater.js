import React from 'react';
import './wastewater.css'
import Button from '@material-ui/core/Button';
import Nav from 'react-bootstrap/Nav';
import Icon from '@material-ui/core/Icon';
import Card from './cardmicro'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';




const Wastewater = (myRef) => {
    return (
      <div className="main_container_treat">
          <div className="treat_card_container">
            <Card class="sewagecard sewagepic" ></Card>
            <Card class="sewagecard septicpic"></Card>
          </div>
          <h2 className="treatment_txt">Whether the plastic ends up in the sewerage treatment facility or if you have a septic tank installed at your home. 
          Micro plastics are small enough to be missed by the filtration systems and end up either in the drinking ground water or eventually in our 
          water sources when the water is released</h2>
          <h2 className="treatment_txt">Waste water treatment plants are an accumulation point of microplastics. From this point, most microplastics are partitioned into sewage sludge. Sludge disposal is thought to be a significant source of microplastic pollution to the environment. A study was conducted on sewage samples in 11 Chinese provinces that found that sludge samples had an average of 22.7 ± 12.1 × 103 plastic parts per kilogram of sludge. However, it has been found that with proper sewage treatment, the export of microplastic particles can be lessened from sewage sludge sources.</h2>
          <div className="water_facility"></div>
          <p className= "buttonwaste"><Button startIcon={<ArrowForwardIosIcon/>}><Nav.Link href="/plasticpollution/#/Ocean">Continue</Nav.Link></Button></p>
          <div></div>

         
      </div>

    );
}

export default Wastewater;
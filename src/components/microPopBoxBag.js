import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import MicroOceanCss from './microOcean.css'
import BagFloat from './plasticBag';
import NetFloat from './microNet';
import MicroFloat from './microPiece';
import ManyMicroFloat from './microMedium';
import Button from '@material-ui/core/Button';
import Card from './cardmicro'
import './cosmetics.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Nav from 'react-bootstrap/Nav';
import "./Macro2.css"


export default function BagPopUp(props) {

    const title = props.title

    const popoverBag =
        <div className="popoverbox">
            <img  src="https://www.nippon.com/en/ncommon/contents/currents/49423/49423.jpg" className="popoverImg"></img>

        </div>;

  const popoverMicro = 
      <div className="popoverbox">
        <h3 className="popoverTxt"> Marine animals consume free microplastics, with varying effects</h3>
        <p className="popoverTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum. Ullamcorper sit amet risus nullam eget. Volutpat sed cras ornare arcu dui vivamus</p>
        <img  src="https://static1.squarespace.com/static/54d3a62be4b068e9347ca880/t/566a048869a91a506fec43ee/1449788556521/?format=1500w" className="popoverImg"></img>
      </div>;

  const popoverNet = 
    <div className="popoverbox">
      <h3 className="popoverTxt"> Marine animals consume free microplastics, with varying effects</h3>
      <p className="popoverTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum. Ullamcorper sit amet risus nullam eget. Volutpat sed cras ornare arcu dui vivamus</p>
      <img  src="https://www.captainjohnwhalewatchingma.com/wp-content/uploads/6163195.jpg" className="popoverImg"></img>
    </div>;

  const popStore = 
  <div className="microPopUp">
    <h3 className="MicropopoverText"> Micros in everyday things</h3>
    <h3 className="MicropopoverText small">Microplastics are, overall, a threat to marine ecosystems. However, there are a few ways these microplastics are able to reach the oceans from land sources. Additionally, there are quite a few ways these microplastics affect us in our daily lives. </h3>
    </div>
  const popRoad = 
   <div className="microPopUp">
     <h3 className="MicropopoverText"> Micros on the road</h3>
     <h3 className="MicropopoverText small">Even when you simply drive your car you can be contributing to plastic pollution. Find out more about microrubbers, a type of microplastics </h3>

   </div>;
  const popOcean = 
  <div className="microPopUp">
    <h3 className="MicropopoverText big"> Micros in the Ocean</h3>
    <h3 className="MicropopoverText small"> Macroplastic breakdown can eventually end up in waterways and oceans, eventually undergoing wave action and degradation. This process is described in our macroplastics adventure. When these aggregate in the ocean, it can lead to disruption of the food chain and consumption by marine life. Dive into our Ocean Microplastic adventure to learn more about the effects this has on our ocean health.  </h3>
  </div>;


  const popFreeTooth = 
    <div className="cosmeticPopUp">
      <h3 className="popoverText"> Excellent Choice!</h3>
      <img src="https://plantae.co.nz/_hashes/files/d2969bd67dce539d9d3f95c2da717318f3b11150" className="cosmeticPopUpImg"></img>
      <p className="popoverText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum. Ullamcorper sit amet risus nullam eget. Volutpat sed cras ornare arcu dui vivamus</p>
    </div>;
  const popGreenTooth = 
  <div className="cosmeticPopUp">
    <h3 className="popoverText"> Good Choice!</h3>
    <p className="popoverText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum. Ullamcorper sit amet risus nullam eget. Volutpat sed cras ornare arcu dui vivamus</p>
  </div>;
  const popRedTooth = 
  <div className="cosmeticPopUp">
    <h3 className="popoverText"> Poor Choice!</h3>
    <p className="popoverText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum. Ullamcorper sit amet risus nullam eget. Volutpat sed cras ornare arcu dui vivamus</p>
    <div className="redTPBathroom"></div>
    <p className= "buttonContinue"><Button startIcon={<ArrowForwardIosIcon/>}><Nav.Link href="/plasticpollution/#/Wastewater">Continue</Nav.Link></Button></p>
  </div>;
   const popRedCleanser = 
   <div className="cosmeticPopUp">
     <h3 className="popoverText"> Poor Choice!</h3>
     <p className="popoverText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum. Ullamcorper sit amet risus nullam eget. Volutpat sed cras ornare arcu dui vivamus</p>
     <div className="redCleanserBathroom"></div>
     <p className= "buttonContinue"><Button startIcon={<ArrowForwardIosIcon/>}><Nav.Link href="/plasticpollution/#/Wastewater">Continue</Nav.Link></Button></p>
   </div>;
   const popRedScrub = 
   <div className="cosmeticPopUp">
     <h3 className="popoverText"> Poor Choice!</h3>
     <p className="popoverText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget lorem dolor sed viverra ipsum. Ullamcorper sit amet risus nullam eget. Volutpat sed cras ornare arcu dui vivamus</p>
     <div className="redScrubBathroom"></div>
     <p className= "buttonContinue"><Button startIcon={<ArrowForwardIosIcon/>}><Nav.Link href="/plasticpollution/#/Wastewater">Continue</Nav.Link></Button></p>
   </div>;
    switch(title) {
      case "popoverBag":
        return <OverlayTrigger trigger="click" placement="top" overlay={popoverBag}>
        <Button className= "floatButton2"><div className= "plastic_bag"></div></Button>
        </OverlayTrigger>
      case "popoverMicro":
        return <><OverlayTrigger trigger="click" placement="left" overlay={popoverMicro}>
        <Button className= "floatButton2"><MicroFloat/><MicroFloat/>
        </Button>
        </OverlayTrigger></>
        case "popoverNet":
          return <OverlayTrigger trigger="click" placement="right" overlay={popoverNet}>
          <Button className= "floatButton"><NetFloat/></Button>
          </OverlayTrigger>
        case "greenToothpaste":
          return <OverlayTrigger trigger="click" placement="left" overlay={popGreenTooth}>
          <Button>
            <div className="twotwo">
            <Card class="coscard toothpasteGreenCard"></Card>
            <h2 className="producttxt">Auromere Ayurvedic Mint-free Toothpaste</h2>
            </div>
            </Button>
          </OverlayTrigger>
        case "freeToothpaste":
          return <OverlayTrigger trigger="click" placement="left" overlay={popFreeTooth}>
          <Button>
            <div className="twotwo">
            <Card class="coscard toothpasteFreeCard"></Card>
            <h2 className="producttxt">Auromere Ayurvedic Mint-free Toothpaste</h2>
            </div>
            </Button>
          </OverlayTrigger>
        case "redToothpaste":
          return <OverlayTrigger trigger="click" placement="right" overlay={popRedTooth}>
          <Button>
            <div className="twotwo">
            <Card class="coscard toothpasteRedCard"></Card>
            <h2 className="producttxt">Crest: 3D White Radiant Mint Whitening Toothpaste		Polyethylene (PE)</h2>
            </div>
          </Button>
          </OverlayTrigger>
        case "redCleanser":
          return <OverlayTrigger trigger="click" placement="right" overlay={popRedCleanser}>
          <Button>
            <div className="twotwo">
            <Card class="coscard cleanserRedCard"></Card>
            <h2 className="producttxt">Bioré	KAO	Breakup with blackheads warming anti-blackhead cleanser	Polyethylene (PE);</h2>
            </div>
            </Button>
          </OverlayTrigger>
        case "greenCleanser":
          return <OverlayTrigger trigger="click" placement="left" overlay={popGreenTooth}>
          <Button>
            <div className="twotwo">
            <Card class="coscard cleanserGreenCard"></Card>
            <h2 className="producttxt">neutrogena hydro boost exfoliating cleanser</h2>
            </div>
            </Button>
          </OverlayTrigger>
        case "freeCleanser":
          return <OverlayTrigger trigger="click" placement="left" overlay={popFreeTooth}>
          <Button>
            <div className="twotwo">
            <Card class="coscard cleanserFreeCard"></Card>
            <h2 className="producttxt">Silk Therapeutics	Evolved by Nature	Refresh Facial Cleanser</h2>
            </div>
            </Button>
          </OverlayTrigger>
        case "redScrub":
          return <OverlayTrigger trigger="click" placement="top" overlay={popRedScrub}>
          <Button>
            <div className="twotwo">
            <Card class="coscard scrubRedCard"></Card>
            <h2 className="producttxt">neutrogena hydro boost exfoliating cleanser</h2>
            </div>
            </Button>
          </OverlayTrigger>
        case "freeScrub":
          return <OverlayTrigger trigger="click" placement="top" overlay={popFreeTooth}>
          <Button><Card class="coscard scrubFreeCard"></Card></Button>

          </OverlayTrigger>
        case "Store":
          return <OverlayTrigger trigger="hover" placement="right" overlay={popStore}>
          <Button className="store" href="/plasticpollution/#/Store"></Button>
          </OverlayTrigger>
        case "Road":
          return <OverlayTrigger trigger="hover" placement="right" overlay={popRoad}>
          <Button className="road" href="/plasticpollution/#/Road"></Button>
          </OverlayTrigger>
        case "Ocean":
          return <OverlayTrigger trigger="hover" placement="left" overlay={popOcean}>
            <Button className="ocean" href="/plasticpollution/#/Ocean"></Button>
          </OverlayTrigger>
        default: 
          return <><OverlayTrigger trigger="click" placement="left" overlay={popoverBag}>
          <Button className= "floatButton"><BagFloat/></Button>
        </OverlayTrigger></>
    }};
   

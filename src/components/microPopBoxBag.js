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
    <img  src="https://i2.wp.com/theregister.co.nz/wp-content/uploads/2017/06/shutterstock_626065514_landscape-850x445-1.jpg?fit=850%2C445&ssl=1" className="MicropopoverImg"></img>
    </div>
  const popRoad = 
   <div className="microPopUp">
     <h3 className="MicropopoverText"> Micros on the road</h3>
     <img  src="data:image/jpeg;base64,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" className="MicropopoverImg"></img>
   </div>;
  const popOcean = 
  <div className="microPopUp">
    <h3 className="MicropopoverText big"> Micros in the Ocean</h3>
    <h3 className="MicropopoverText small"> Macroplastic breakdown can eventually end up in waterways and oceans, eventually undergoing wave action and degradation. This process is described in our macroplastics adventure. When these aggregate in the ocean, it can lead to disruption of the food chain and consumption by marine life. Dive into our Ocean Microplastic adventure to learn more about the effects this has on our ocean health.  </h3>
    <img  src="https://www.captainjohnwhalewatchingma.com/wp-content/uploads/6163195.jpg" className="MicropopoverImg"></img>
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
   

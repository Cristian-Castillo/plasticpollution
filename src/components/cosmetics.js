import React from 'react';
import Button from '@material-ui/core/Button';
import Nav from 'react-bootstrap/Nav';
import Card from './cardmicro'
import BagPopUp from "./microPopBoxBag"
import './cosmetics.css'

const Cosmetics = () => {

    return <div className="allGroup">
        <div className="headerContainer">
            <h1 className="costext">SMART SHOPPING</h1>
            <h3 className="costextbody">Microbeads are a special type of microplastic that are initially less than 5mm. These microbeads are commonly used in cosmetics for anything from exfoliation agents to filler in products. However, these cosmetic microbeads may be significantly impacting marine environments. This is because they are a direct to ocean pipeline for microplastics. Between 4594 and 94,500 microbeads could be released from an exfoliant in a single use. Research shows that microbeads could be responsible for a significant portion of human microplastics in the ocean. </h3>
        </div>
        <h2 className="productTitle">Pick a toothpaste</h2>
        <div className="twoGroup">
        <BagPopUp title = "redToothpaste"/>
        <BagPopUp title = "greenToothpaste"/>
        <BagPopUp title = "freeToothpaste"/>
        </div>
        <h2 className="productTitle">Pick a cleanser</h2>
        <div className="twoGroup">
        <BagPopUp title = "redCleanser"/>
        <BagPopUp title = "freeCleanser"/>
        <BagPopUp title = "greenCleanser"/>
        </div>
        <h2 className="productTitle">Pick a scrub</h2>
        <div className="twoGroup">
        <BagPopUp title = "freeScrub"/>
        <BagPopUp title = "redScrub"/>
        </div>

    </div>
}

export default Cosmetics;
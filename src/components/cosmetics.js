import React from 'react';
import Button from '@material-ui/core/Button';
import Nav from 'react-bootstrap/Nav';
import Card from './Card'
import BagPopUp from "./microPopBoxBag"
import './cosmetics.css'

const Cosmetics = () => {

    return <div className="allGroup">
        <div className="headerContainer">
            <h1 className="costext">SMART SHOPPING</h1>
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
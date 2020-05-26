import React, { useState } from "react";
import MapChart from "./FishConsumptionMap"
import './frozenFish.css'
import Card from "./cardmicro"
import Button from "react-bootstrap/Button";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function FrozenFish (){
    return (<div className="frozenContentContainer">
        <h2 className="frozenText">Marine microplastic debris may compromise human food security, food safety and health. Microplastics have been detected in commercial sea food and other food items and drinking water.Research on analytical methods, toxicity and toxicokinetics in humans of micro- and nano-sized plastics is needed. Our knowledge in this field is still far from complete</h2>
        <div className="seafood">
            <Card class="foodcard fishandchips"></Card>
            <Card class="foodcard ceviche"></Card>
            <Card class="foodcard sushi"></Card>
            <Card class="foodcard cajun"></Card>
            <Card class="foodcard sashimi"></Card>
            <Card class="foodcard salmon"></Card>
            <Card class="foodcard sardines"></Card>
            <Card class="foodcard oha"></Card>

        </div>
        <h2 className="frozenText">The annual dietary exposure of European consumers can be up to 11,000 microplastics. Estimating the potential risks for human health is not yet possible.</h2>
        <div className="graph"><MapChart></MapChart></div>
        <Button startIcon={<ArrowForwardIosIcon/>} href="/plasticpollution/#/HumanConsumptionNano" className= "frozenbutton">Continue</Button>
        </div>);
}




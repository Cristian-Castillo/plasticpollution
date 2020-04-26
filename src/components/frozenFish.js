import React, { useState } from "react";
import MapChart from "./FishConsumptionMap"
import './frozenFish.css'

export default function FrozenFish (){
    return (<div className="frozenContentContainer">
        <h2 className="frozenText">Fish and other marine animals that accumulate plastic throughout their lives, are fished and sold for human consumption.</h2>
        <div className="pictureofFreshFish"></div>
        <h2 className="frozenText">Fish is huge resource of food for many people in many countries</h2>
        <div className="graph"><MapChart></MapChart></div>
        </div>);
}




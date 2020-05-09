import React from 'react';
import Button from '@material-ui/core/Button';
import Nav from 'react-bootstrap/Nav';
import './Store.css'

const Store = () => {
    return <div className="storeBackground">
        <h2 className="storeText">Time to go shopping</h2>
        <div className="buttonContainer">
        <p className= "storeButton"><Button className= "storeButton"><Nav.Link href="/plasticpollution/#/Clothes">Clothes</Nav.Link></Button></p>
        <p className= "storeButton"><Button className= "storeButton"><Nav.Link href="/plasticpollution/#/Cosmetics">Cosmetics</Nav.Link></Button></p>
        <p className= "storeButton"><Button className= "storeButton"><Nav.Link href="/plasticpollution/#/FishMarket">Food</Nav.Link></Button></p>
        </div>
    </div>
}

export default Store;
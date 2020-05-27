import React from 'react';
import './MicroBoardwalk.css'
import BagPopUp from "./microPopBoxBag"


const MicroBoardwalk= () => {
    return <div className="full_boardwalk_page">
        <div className="main_div_boardwalk">
        <BagPopUp title = "Store"/>
        <BagPopUp title = "Road"/>
        <BagPopUp title = "Ocean"/>
    </div>
    </div>
}

export default MicroBoardwalk;
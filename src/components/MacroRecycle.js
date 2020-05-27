import React from 'react';
import rcenter from './assets/recyclingfactory.jpg'
import Card from './flippableCard';
import './MacroRecycle.css'


const Macro = (myRef) => {
    return (
      <div className="main_div_macro">
      <div className="scene_container2">
        <div className='leftcolumn'>
          <div className='buttonContainer'>
            <a className="backButton" href='./plasticpollution/#/Macro'>&#8249;</a>
          </div>
        </div>
        <div className="middle">
          <h1 className="macrotxttitle">Recycling Center</h1>
          <a id="area" className="areagood" href="/plasticpollution/#/Macro2"></a>
          <a id="area" className="areabad" href="/plasticpollution/#/MacroAsia"></a>
          <img className="landfill" src={rcenter} ></img>

        </div>
        <div className='rightcolumn'>
          <div className='buttonContainer'>
          </div>
        </div>
        
      </div>
      <div>
        <p className="description2 macrotxt">Lets talk about some myths and issues surrounding recycling in the US. According to the most recent U.S Environmental Protection Agency data, less than 10 percent of the plastic used in the U.S. is recycled. When Americans do recycle, there is a lot of confusion and misinformation about what is appropriate to recycle. Of the 66 tons of recycling material every year a third is exported to recycling centers. </p>
        <p className="description2 macrotxt">Recycling facilities are separating “mixed plastics” from those plastics which still retain value – such as water bottles, laundry detergent bottles and milk jugs – and, contrary to what customers expect, sending them directly to a landfill or incinerator. </p>
        <p className="recyclingTitleContainer macrotxttitle">Do You Know What Goes Into a Recycling Bin?</p>
        <div className="recyclable_fact_cont_macro">
          <div className="card_macro_container">
            <p className="macrotxt">Plastic Bottles</p>
            <Card class1="recyc_macro_item bottle_recyc_macro"  class2="recyc_macro_item" title2='Yes!' text2="Plastic bottles should be recycled just make sure they are dry and cleaned"/>
        </div>
        <div className="card_macro_container">
            <p className="macrotxt">Plastic Jug</p>
            <Card class1="recyc_macro_item jug_recyc_macro"  class2="recyc_macro_item" title2='Yes!' text2="Plastic jugs should be recycled just make sure they are dry and cleaned"/>
        </div>
        <div className="card_macro_container">
            <p className="macrotxt">Tin Can</p>
            <Card class1="recyc_macro_item tin_recyc_macro" title="" class2="recyc_macro_item" title2='Yes!' text2="Recycle empty tin, aluminum and steel cans. Throw away the lid first!"/>
        </div>
        <div className="card_macro_container">
            <p className="macrotxt">Paper</p>
            <Card class1="recyc_macro_item paper_recyc_macro" title="" class2="recyc_macro_item" title2='Yes!' text2="Recycle paper, newspaper and magazines as long as they are dry"/>
        </div>
        <div className="card_macro_container">
            <p className="macrotxt">Cardboard</p>
            <Card class1="recyc_macro_item cardboard_recyc_macro" title="" class2="recyc_macro_item" title2='Yes!' text2="Recycle cardboard, but flatten first, and make sure no leftovers"/>
        </div>
        <div className="card_macro_container">
            <p className="macrotxt">Milk/Juice Cartons</p>
            <Card class1="recyc_macro_item carton_recyc_macro" title="" class2="recyc_macro_item" title2='Maybe!' text2="Recycling rules for milk/juice/food cartons vary by city"/>
        </div>
        <div className="card_macro_container">
            <p className="macrotxt">Glass</p>
            <Card class1="recyc_macro_item glass_recyc_macro" title="" class2="recyc_macro_item" title2='Maybe!' text2="Glass recycling rules vary by city"/>
        </div>
        <div className="card_macro_container">
            <p className="macrotxt">Takeout Container</p>
            <Card class1="recyc_macro_item takeout_recyc_macro" title="" class2="recyc_macro_item" title2='No!' text2="Takeout containers are typically made of non-recyclable plastic."/>
        </div>
        <div className="card_macro_container">
            <p className="macrotxt">Plastic wrap/baggies</p>
            <Card class1="recyc_macro_item ziploc_recyc_macro" title="" class2="recyc_macro_item" title2='No!' text2="Do not recycle plastic wrap, bubble wrap, sandwich bags and freezer bags"/>
        </div>
        <div className="card_macro_container">
            <p className="macrotxt">Wax coated cups</p>
            <Card class1="recyc_macro_item wax_recyc_macro" title="" class2="recyc_macro_item" title2='No!' text2="Cups with plastic or waxed coatings are not recyclable"/>
        </div>
        <div className="card_macro_container">
            <p className="macrotxt">Plastic Bags</p>
            <Card class1="recyc_macro_item bag_recyc_macro" title="" class2="recyc_macro_item" title2='No!' text2="Plastic bags are not recyclable because they get tangled in equipment and threaten worker safety."/>
        </div>
        <div className="card_macro_container">
            <p className="macrotxt">Snack Packages</p>
            <Card class1="recyc_macro_item flex_recyc_macro" title="" class2="recyc_macro_item" title2='No!' text2="Do not recycle snack packages such as chip bags or juice pouches"/>
        </div>
     </div>
      </div>
      </div>
    );
}

export default Macro;

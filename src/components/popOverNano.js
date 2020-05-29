import React from "react";
import { MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBBtn, MDBContainer } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import HoverImage from "react-hover-image"
import yourFile from '../assets/fish.png'
import yourFileTwo from '../assets/nanoLifeCycle.jpg'

const PopoverPage = () =>{

  const styleMe = {
    height:"200px",
    width: "200px"
  };


  return (
    <MDBContainer>
      <div style={{ display: "flex" }} className="m-5 p-5">
        <MDBPopover placement="right" popover clickable id="popper2">
          <MDBBtn>
        <img style = {styleMe} src={yourFile}/>
          </MDBBtn>
          <div>
            <MDBPopoverHeader>popover on right</MDBPopoverHeader>
            <MDBPopoverBody>
            <img src ={yourFileTwo} />
            </MDBPopoverBody>
          </div>
        </MDBPopover>
      </div>
    </MDBContainer>
  );
}

export default PopoverPage;

import logo from './assets/ucsc.png';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css';
import {Link } from "react-router-dom";

class Navigation extends React.Component{
	render() {
		return(
			<div>
					<Navbar bg="light" expand="lg" collapseOnSelect>
					  <Navbar.Brand href="/"><img src={logo} className="logo"></img></Navbar.Brand>
			  		<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
					   <Navbar.Collapse id="responsive-navbar-nav">
					    <Nav className="mr-auto">
					      <Nav.Link href="/https://cse115b-plasticpollution.github.io/plasticpollution/#/">Home</Nav.Link>
					      <Nav.Link href="/plasticpollution/#/about">About</Nav.Link>
								<Nav.Link href="/https://cse115b-plasticpollution.github.io/plasticpollution/#/faq">FAQ</Nav.Link>
								<Nav.Link href="/https://cse115b-plasticpollution.github.io/plasticpollution/#/Contact">Contact</Nav.Link>
								<Nav.Link href="/https://cse115b-plasticpollution.github.io/plasticpollution/#/Activist">Become an Activist</Nav.Link>
								<NavDropdown title="Start an Adventure" id="collasible-nav-dropdown">
								<NavDropdown.Item href="/https://cse115b-plasticpollution.github.io/plasticpollution/#/Macro">Macro</NavDropdown.Item>
								<NavDropdown.Item href="/https://cse115b-plasticpollution.github.io/plasticpollution/#/Micro">Micro</NavDropdown.Item>
								<NavDropdown.Item href="/plasticpollution/#/Nano">Nano</NavDropdown.Item>
							  </NavDropdown>
					    </Nav>
					  </Navbar.Collapse>
					</Navbar>
      </div>
				)
		}
}

export default Navigation;

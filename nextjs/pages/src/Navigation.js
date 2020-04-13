import logo from './assets/ucsc.png';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navigation.css';
import Head from 'next/head'

class Navigation extends React.Component{
	render() {
		return(
			<div>
					<Navbar bg="light" expand="lg" collapseOnSelect>
					  <Navbar.Brand href="/"><img src={logo} className="logo"></img></Navbar.Brand>
			  		<Navbar.Toggle aria-controls="responsive-navbar-nav"/>
					   <Navbar.Collapse id="responsive-navbar-nav">
					    <Nav className="mr-auto">
					      <Nav.Link href="/">Home</Nav.Link>
					      <Nav.Link href="/about">About</Nav.Link>
								<Nav.Link href="/faq">FAQ</Nav.Link>
								<Nav.Link href="/Contact">Contact</Nav.Link>
								<Nav.Link href="/Activist">Become an Activist</Nav.Link>
								<NavDropdown title="Start an Adventure" id="collasible-nav-dropdown">
								<NavDropdown.Item href="/Macro">Macro</NavDropdown.Item>
								<NavDropdown.Item href="/Micro">Micro</NavDropdown.Item>
								<NavDropdown.Item href="/Nano">Nano</NavDropdown.Item>
							  </NavDropdown>
					    </Nav>
					  </Navbar.Collapse>
					</Navbar>
      </div>
				)
		}
}

export default Navigation;

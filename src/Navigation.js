import logo from './assets/ucsc.png';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css';

class Navigation extends React.Component{
	render() {
		return(
			<div>
					<Navbar bg="light" expand="lg">
					  <Navbar.Brand href="/"><img src={logo} className="logo"></img></Navbar.Brand>
					  <Navbar.Toggle aria-controls="basic-navbar-nav" />
					  <Navbar.Collapse id="basic-navbar-nav">
					    <Nav className="mr-auto">
					      <Nav.Link href="/">Home</Nav.Link>
					      <Nav.Link href="/about">About</Nav.Link>
								<Nav.Link href="/faq">FAQ</Nav.Link>
								<Nav.Link href="/Contact">Contact</Nav.Link>
					    </Nav>
					  </Navbar.Collapse>
					</Navbar>

      </div>
				)
		}
}

export default Navigation;

import logo from './assets/ucsc.png';
import './Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
	render() {
		return(
							<div>
	              <ul id="nav">
	              	<li><img src={logo} className="logo"></img></li>
	                <li><NavLink to="/">Home</NavLink></li>
									<li><NavLink to="/about">About</NavLink></li>
									<li><NavLink to="/contact">Contact Us</NavLink></li>
									<li><NavLink to="/faq">FAQ</NavLink></li>
	              </ul>
	        </div>
	        )
		}
}

export default Navbar;

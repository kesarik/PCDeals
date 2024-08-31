import React from 'react';
import './navbar.css'; 
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="PC Deals Hardware" /> 
        <h1>PC Deals Hardware</h1>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="What are you looking for?" />
        <button type="submit"><i className="fa fa-search"></i></button> 
      </div>
      <div className="navbar-links">
        <a href="#">Sign In</a>
        <a href="#">Register</a>
        <a href="tel:+919728622667" className="navbar-helpline">
          <i className="fa fa-phone"></i> +91 1234567893
        </a>
        <a href="#"><i className="fa fa-shopping-cart"></i></a>
        <a href="#"><i className="fa fa-home"></i></a>
        <a href="#"><i className="fa fa-lock"></i></a>
      </div>
    </header>
  );
};

export default Navbar;

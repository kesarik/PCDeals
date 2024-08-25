import React from 'react';
import './Components/navbar.css';  

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <img src="logo.png" alt="PC Deals Hardware" /> {/* Replace with your logo */}
        <h1>PC Deals Hardware</h1>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="What are you looking for?" />
        <button type="submit"><i className="fa fa-search"></i></button> {/* Font Awesome for search icon */}
      </div>
      <div className="navbar-links">
        <a href="#">Sign In</a>
        <a href="#">Register</a>
        <a href="tel:+919728622667" className="navbar-helpline">
          <i className="fa fa-phone"></i> +91 9728622667
        </a>
        <a href="#"><i className="fa fa-shopping-cart"></i></a>
        <a href="#"><i className="fa fa-home"></i></a>
        <a href="#"><i className="fa fa-lock"></i></a>
      </div>
    </header>
  );
};

export default Navbar;

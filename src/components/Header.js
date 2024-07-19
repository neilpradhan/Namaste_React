
import React from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    return (
      <div className="header">
        <div className="logo">
          <img src = "https://marketplace.canva.com/EAFzZd9frfk/1/0/1600w/canva-colorful-illustrative-restaurant-master-chef-logo-4rQv_oY-CF8.jpg"></img>
        </div>
  
        <div className="nav-items">
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Login</li>
          </ul>
        </div>
      </div>
    );
  };


  export default Header;

  
// src/components/NavBar/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import NavLinks from '../NavLinks/NavLinks';
import image from "../../assets/images/pic.jpg"

export const NavBar = () => (
  <div className="floating-nav">
    <div className="nav-content">
      <Link to="/" className="profile-img">
        <img src={image} alt="Profile" />
      </Link>
      <NavLinks />
    </div>
  </div>
);



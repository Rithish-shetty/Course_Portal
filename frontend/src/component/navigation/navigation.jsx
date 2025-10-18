// src/components/Navigation.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/browse">Browse Courses</NavLink>
        </li>
        <li>
          <NavLink to="/contactUs">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
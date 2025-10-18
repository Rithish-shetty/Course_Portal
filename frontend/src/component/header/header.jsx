import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './header.css';
import logo from '../../assets/SU.webp';

const Header = (props) => {
  return (
    <header className="app-header">
      <div className="header-content">
        {/* Left side: Logo and Title */}
        <div className="header-left">
          <img src={logo} alt="Srinivas University Logo" className="header-logo" />
          <div className="header-title">
            <h1>Srinivas University</h1>
            <p>Course Registration Portal</p>
          </div>
        </div>

        {/* Right side: Admin Button */}
        <div className="header-right">
          {props.buttonName && props.to && 
          <Link to={props.to} className="admin-button">
            {props.buttonName}
          </Link>
}
        </div>
      </div>
    </header>
  );
};

export default Header;
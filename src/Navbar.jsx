import React from "react";
import { FaShoePrints } from "react-icons/fa";
import "./Navbar.css"; // Import the CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <div className="navbar-icon">
          <FaShoePrints size={20} />
        </div>
        <div className="navbar-text">
          <span>DripKicks</span>
        </div>
      </div>
      <ul className="navbar-list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="login-signup">
        <button className="login-signup-button">Login/Signup</button>
      </div>
    </nav>
  );
}

export default Navbar;

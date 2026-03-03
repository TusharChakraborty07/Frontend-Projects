import React from "react";
import "./style/Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <div className="logo">
          <img src="src/assets/Frame 2 1.svg" alt="" />
        </div>

        <div className="nav-links">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

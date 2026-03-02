import React from "react";
import "./style/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav>
          <div className="logo">
            <img src="src/assets/brand_logo.png" alt="" />
          </div>

          <ul>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>

          <button>Login</button>
        </nav>
      </div>
    </>
  );
};

export default Navbar;

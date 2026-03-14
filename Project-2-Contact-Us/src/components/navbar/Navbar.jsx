import React from "react";
import styles from "./Navbar.module.css";
import Nav_logo from "../../assets/Frame 2 1.svg";
const Navbar = () => {
  return (
    <div className="container">
      <nav className={styles.nav}>
        <div className="nav-logo">
          <img src={Nav_logo} alt="Nav_Logo" />
        </div>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

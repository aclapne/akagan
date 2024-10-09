// components/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/Sandbox" className="navbar-link">
            Sandbox
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/Playground" className="navbar-link">
            Playground
          </Link>
        </li>
        <li className="navbar-item">
          <Link to={"/Calculator"} className={"navbar-link"}>
            Calculator
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/About" className="navbar-link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;

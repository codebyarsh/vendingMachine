import React, { Component } from "react";

import { NavLink } from "react-router-dom";

import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <nav className="Navbar-link">
          <NavLink to="/"> VendingMachine </NavLink>
          <NavLink to="/chips"> Chips </NavLink>
          <NavLink to="/soda"> Soda </NavLink>
          <NavLink to="/sardins"> Sardins </NavLink>
        </nav>
      </div>
    );
  }
}

export default Navbar;

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import img from "./VendingMachine.png";
import "./VendingMachine.css";

class VendingMachine extends Component {
  render() {
    return (
      <div className="VendingMachine">
        <h1> I am Vending Machine Component</h1>
        <div class="Item-links">
          <NavLink to="/chips"> Chips </NavLink>
          <NavLink to="/soda"> Soda </NavLink>
          <NavLink to="/sardins"> Sardins </NavLink>
        </div>
      </div>
    );
  }
}

export default VendingMachine;

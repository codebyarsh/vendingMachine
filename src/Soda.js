import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import img from "./Soda.png";
import "./Soda.css";

class Soda extends Component {
  render() {
    return (
      <div className="Soda">
        <img src={img} className="Soda-img" />
        <div class="Soda-text">
          <h1> OMG Suger</h1>
          <NavLink to="/"> Go Back </NavLink>
        </div>
        <img src={img} className="Soda-img" />
      </div>
    );
  }
}

export default Soda;

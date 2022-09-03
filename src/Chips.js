import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import chipsImg from "./Chips.png";
import "./Chips.css";

// class Chips extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { imgCount: [] };
//     this.handleChange = this.handleChange.bind(this);
//   }

//   handleChange() {
//     console.log("Clicked");
//     const x = window.innerWidth * Math.random();
//     const y = window.innerHeight * Math.random();
//     this.setState((prevState) => {
//       imgCount: [...prevState.imgCount, { x, y }];
//     });
//   }

//   render() {
//     const imgCount = this.state.imgCount.map((bag, i) => (
//       <img
//         src={img}
//         key={i}
//         className="bag"
//         alt="Chips Bags"
//         style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
//       />
//     ));
//     return (
//       <div className="Chips">
//         <div className="Chips-box">
//           <h1> Chips: {this.state.imgCount.length} </h1>
//           <button onClick={this.handleChange}>nom nom </button>
//           <NavLink to="/"> Go back </NavLink>
//           {imgCount}
//         </div>
//       </div>
//     );
//   }
// }

// export default Chips;

class Chips extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bags: [],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    this.setState((prevState) => ({
      bags: [...prevState.bags, { x, y }],
    }));
  }

  render() {
    const bags = this.state.bags.map((bag, i) => (
      <img
        key={i}
        src={chipsImg}
        className="bag"
        style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
        alt="bag of lay's chips"
      />
    ));
    return (
      <div className="Chips">
        <h1>bags eaten: {this.state.bags.length}</h1>
        <button onClick={this.handleClick}>nom nom nom</button>
        <h1>
          <NavLink to="/">Go Back</NavLink>
        </h1>

        {bags}
      </div>
    );
  }
}

export default Chips;

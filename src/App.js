import React, { Component } from "react";
import logo from "./logo.svg";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Chips from "./Chips";
import Sardins from "./Sardins";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<VendingMachine />} />
            <Route path="/soda" element={<Soda />} />
            <Route path="/chips" element={<Chips />} />
            <Route path="/sardins" element={<Sardins />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <nav>
//           <NavLink to="/"> About </NavLink>
//           <NavLink to="/contact"> Contact </NavLink>
//           <NavLink to="/dog/hater"> Hater </NavLink>
//           <NavLink to="/dog"> Dog </NavLink>
//           <NavLink to="/dog/c"> Dog </NavLink>
//         </nav>
//         <Routes>
//           <Route path="/" element={<About />} />
//           <Route path="/dog" element={<Dog name="lalla" />} />
//           <Route path="/dog/c" element={<Dog name="bhalla" />} />
//           <Route path="/dog/hater" element={<Hater />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Router>
//     );
//   }
// }

// export default App;

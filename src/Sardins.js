import React, { Component } from 'react'
import { NavLink} from "react-router-dom";

import "./Sardins.css"

class Sardins extends Component {
    render() {
        return (
            <div className="Sardins">
                <h1>Do not Eat Sardins <NavLink to="/"> Go Back </NavLink></h1>
                
            </div>
            
        )
    }
}

export default Sardins;
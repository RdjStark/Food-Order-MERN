// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// export default class Navbar extends Component {

//   render() {
//     return (
//       <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
//         <Link to="/" className="navbar-brand">Food Delivery</Link>
//         <div className="collpase navbar-collapse">
//         <ul className="navbar-nav mr-auto">
//           <li className="navbar-item">
//           <Link to="/" className="nav-link">Menu</Link>
//           </li>
//           <li className="navbar-item">
//           <Link to="/create" className="nav-link">Orders</Link>
//           </li>
//         </ul>
//         </div>
//       </nav>
//     );
//   }
// }

import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import { NavBarList } from "./NavBarList";

class NavBar extends Component {
  
  render() {
    return (
      <React.Fragment>
        <div className="navbar-fixed">
          <nav className="z-depth-0">
            <div className="nav-wrapper">
              <Link to="/" className="brand-logo">
                <i className="material-icons">code</i>Tomato
              </Link>
                <ul
                  id="nav-mobile"
                  className="right list-margin"
                >
                  <NavBarList />
                </ul>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default NavBar;

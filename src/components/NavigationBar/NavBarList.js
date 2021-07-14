import { Link } from "react-router-dom";
import React from "react";

export function NavBarList(props) {
  return (
    <>
      <li>
        <Link to="/menu">Menu</Link>
      </li>
      <li>
        <Link to="/orders">Your Orders</Link>
      </li>
    </>
  );
}


import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ display: "flex", alignItems: "space-between" }}>
      <span className="logo">REDUX STORE</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart items : 0</span>
      </div>
    </div>
  );
};
export default NavBar;
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  return (
    <header>
      <Link to="/" className="logo">
        {/* <img src="" alt="" /> */}

        <span>Shopping Cart</span>
      </Link>

      <nav className="navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </nav>

      <Link to="/cart" className="items">
        <span>Cart: 2</span>
      </Link>
    </header>
  );
};

export default Header;

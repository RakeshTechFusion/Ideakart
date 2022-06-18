import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbarDiv">
      <div className="navbar">
        <div className="navbarLeft">
          <div className="navbarH2">
            <Link to="/">
              <h2>IDEAKART</h2>
            </Link>
          </div>
          <div className="navbarSearch">
            <input type="text" placeholder="Search" />
            <button>Search</button>
          </div>
        </div>
        <div className="navbarRight">
          <div className="navbarRoutes">
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

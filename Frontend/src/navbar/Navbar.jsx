import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { changeUserName } from "../redux/action";

const Navbar = () => {
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();
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
            {username ? (
              <>
                <div style={{ color: "white" }}>Hello,&nbsp;{username}</div>
                <div
                  style={{ color: "white", cursor: "pointer" }}
                  onClick={() => dispatch(changeUserName(null))}
                >
                  Logout
                </div>
              </>
            ) : (
              <>
                <Link to="/user/login">Sign In</Link>
                <Link to="/user/signup">Sign Up</Link>
              </>
            )}
            {/* <Link to="/user/login">Sign In</Link>
            <Link to="/user/signup">Sign Up</Link> */}
            <Link to="/cart">Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

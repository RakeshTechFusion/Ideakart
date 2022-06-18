import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h2>Get To Know Us</h2>
      </div>
      <div>
        <Link to="/about">‣ About</Link>
        <Link to="/contact">‣ Contact</Link>
      </div>
      <div>
        <Link to="/privacy">‣ Privacy Policy</Link>
        <Link to="/refund">‣ Refund Policy</Link>
      </div>
      <div>
        <Link to="/earnmoney">‣ Earn Money Online</Link>
        <Link to="/quickbuy">‣ QuickBuyer</Link>
      </div>
    </div>
  );
};

export default Footer;

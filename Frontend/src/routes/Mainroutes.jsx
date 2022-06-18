import React from "react";
// import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Cart from "../products/Cart";
import Checkout from "../products/Checkout";
import Description from "../products/Description";
import Pay from "../products/Pay";
import { Products } from "../products/Products";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Pay />} />
        <Route path="/products/description/:id" element={<Description />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;

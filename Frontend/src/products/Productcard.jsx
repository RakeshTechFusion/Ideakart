import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AddToCart } from "../redux/action";
import "./product.css";

export const Productcard = (items) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let [btn, setbtn] = useState(false);

  return (
    <div className="productdiv">
      <div
        className="productimage"
      >
        <img
          className="fruitimg"
          src={items.image}
          alt="fruit"
          onClick={() => {
            navigate(`/products/description/${items._id}`);
          }}
        />
      </div>
      <p className="title">{items.name}</p>
      <p className="price">₹{items.price}</p>
    </div>
  );
};

export default Productcard;

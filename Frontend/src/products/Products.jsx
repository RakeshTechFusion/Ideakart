import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata, fetchfilter } from "../redux/action";
import Productcard from "./Productcard";
import "./product.css";

export const Products = () => {
  let productsData = useSelector((state) => state.productsData);
  console.log(productsData);
  let dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchdata());
  }, [dispatch]);

  return (
    <div className="productbody">
      <div className="productcontainer">
        {productsData.map((el) => {
          return <Productcard key={el._id} {...el} />;
        })}
      </div>
    </div>
  );
};

import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddToCart, fetchdes, incordec } from "../redux/action";
import "./description.css";

const Description = () => {
  const { id } = useParams();
  const desData = useSelector((state) => state.desData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchdes(id));
  }, [id, dispatch]);
  console.log(desData);

  // const handleCart = (desData) => {
  //   dispatch(AddToCart(desData));
  // };

  //modal
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <div className="desbody">
      <div className="descontainer">
        <div className="poster">
          <img src={desData.image} alt="logo" />
        </div>
        <div className="descleft">
          <h1 className="destitle">{desData.name}</h1>
          <p className="des">{desData.description}</p>
          <p className="desprice1">₹{desData.price}</p>
          <div className="btns">
            <button
              className="addcartbtn"
              onClick={() => {
                dispatch(AddToCart(desData));
                toggleModal();
              }}
            >
              Add to cart
            </button>

            {/* modal */}
            {modal && (
              <div className="modal">
                <div onClick={toggleModal} className="overlay"></div>
                <div className="modal-content">
                  <h2>Added to the cart!</h2>
                  <button className="close-modal" onClick={toggleModal}>
                    X
                  </button>
                </div>
              </div>
            )}
            {/* modalend */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;

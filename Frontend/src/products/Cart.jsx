import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { cartqty, deletecart, fetchcart } from "../redux/action";

const Div = styled.div`
  text-align: center;
  color: white;
  color: #2874f0;
  font-size: 22px;
  margin-top: 30px;
`;
const Table = styled.table`
  margin: 20px auto;
  width: 80%;
  text-align: left;
`;
const DIV1 = styled.div`
  margin: auto;
  width: 80%;
  text-align: left;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;
const ProductName = styled.th`
  width: 60%;
  padding: 5px;
`;
const Th = styled.th`
  padding: 5px;
  text-align: center;
`;
const Td = styled.td`
  vertical-align: center;
  padding: 7px;
  margin: auto;
  text-align: center;
`;
const Td1 = styled.td`
  vertical-align: top;
  display: flex;
  padding: 7px;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
  padding: 7px;
  margin-right: 7px;
`;
const Cross = styled.img`
  width: 32px;
  height: 32px;
  padding: 7px;
  cursor: pointer;
`;
const Button = styled.button`
  width: 30px;
  height: 30px;
  font-size: 25px;
  cursor: pointer;
`;
const Quantity = styled.div`
  border: 1px solid gray;
  width: 40px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  box-sizing: border-box;
`;

const Cart = () => {
  const cartdata = useSelector((state) => state.cartdata);
  const totalprice = useSelector((state) => state.totalprice);
  console.log(cartdata, totalprice);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcart());
  }, [dispatch]);

  return (
    <>
      <Div>
        <h1 style={{ fontWeight: "600", padding: "0 0 10px 0", margin: "0" }}>
          CART
        </h1>
      </Div>

      <Table>
        <thead>
          <tr>
            <ProductName style={{ textAlign: "center" }}>PRODUCT</ProductName>
            <Th>PRICE</Th>
            <Th>QUANTITY</Th>
            <Th>TOTAL</Th>
            <Th>REMOVE</Th>
          </tr>
        </thead>
        <tbody>
          {cartdata.map((item) => {
            return (
              <>
                <tr style={{ height: "60px" }}>
                  <Td1>
                    <Img src={item.image} alt={item.image} />
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <p>{item.name}</p>
                    </div>
                  </Td1>
                  <Td>₹{item.price}</Td>
                  <Td>
                    <div
                      style={{
                        display: "flex",
                        textAlign: "center",
                        // width: "fitContent",
                        // margin: "auto",
                        justifyContent: "center",
                      }}
                    >
                      <Button onClick={() => dispatch(cartqty(item._id, -1))}>
                        -
                      </Button>
                      <Quantity>{item.qty}</Quantity>
                      <Button onClick={() => dispatch(cartqty(item._id, 1))}>
                        +
                      </Button>
                    </div>
                  </Td>
                  <Td>₹{item.price * item.qty}</Td>
                  <Td>
                    <Cross
                      onClick={() => dispatch(deletecart(item._id))}
                      src="https://thumbs.dreamstime.com/z/red-cross-symbol-icon-as-delete-remove-fail-failure-incorr-incorrect-answer-89999776.jpg"
                      alt="remove"
                    />
                  </Td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>

      <div>
        <DIV1
          style={{
            backgroundColor: "#f8f8f8",
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <div style={{ width: "37%" }}>
            <h2 style={{ textAlign: "center" }}>CART TOTAL</h2>
            <div
              style={{
                backgroundColor: "white",
                padding: "30px",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>Subtotal:</h3>
                <h3>₹{totalprice}</h3>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>GST 12%</h3>
                <h3>₹{Math.floor(totalprice * 0.12)}</h3>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h3>TOTAL</h3>
                <h3>₹{totalprice + Math.floor(totalprice * 0.12)}</h3>
              </div>
              <button
                onClick={() => navigate("/checkout")}
                style={{
                  backgroundColor: "#2874f0",
                  color: "white",
                  height: "50px",
                  marginBottom: "10px",
                  textAlign: "center",
                  cursor: "pointer",
                  fontSize: "18px",
                  width: "100%",
                  border: "none",
                }}
              >
                PROCEED TO CHECKOUT
              </button>
              <button
                onClick={() => navigate("/")}
                style={{
                  backgroundColor: "#2874f0",
                  color: "white",
                  height: "50px",
                  marginBottom: "10px",
                  textAlign: "center",
                  cursor: "pointer",
                  fontSize: "18px",
                  width: "100%",
                  border: "none",
                }}
              >
                CONTINUE SHOPPING
              </button>
            </div>
          </div>
        </DIV1>
      </div>
    </>
  );
};

export default Cart;

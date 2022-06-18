import React from "react";
import "./pay.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Pay() {
  const [debit, setDebit] = useState(false);
  const [otp, setOtp] = useState(false);
  const [error, setError] = useState(true);
  const [cvv, setCvv] = useState(0);
  const [cod, setCod] = useState(false);

  let navigate = useNavigate();

  const payment = (e) => {
    e.preventDefault();

    setOtp(!otp);

    if (cvv.length != 3) {
      setError(true);
      alert("Invalid CVV");
    } else {
      setError(false);
    }
  };
  var count = 0;
  const arfeenChange = (e) => {
    count++;
    console.log(count);
    if (count == 17) {
      setError(false);
      alert("Invalid Card Number");
    } else {
      setError(true);
    }
  };

  const checkCvv = (e) => {
    setCvv(e.target.value);
  };

  const handleChange = (e) => {
    console.log(e.target.year);
  };
  return (
    <>
      <h1 className="img_over">Payment</h1>
      <div style={{ height: "auto" }}>
        <div
          style={{
            width: "50%",
            margin: "auto",
            lineHeight: "48px",
            height: "auto",
            marginTop: "50px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            paddingBottom: "25px",
            paddingTop: "30px",
            marginBottom: "50px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form action="">
            <input
              type="checkbox"
              onChange={() => setCod(!cod)}
              style={{ cursor: "pointer" }}
            />
            <label htmlFor="">Cash On Delevery</label> <br />
            <input
              type="checkbox"
              onChange={() => setDebit(!debit)}
              style={{ cursor: "pointer" }}
            />
            <label htmlFor=""> Debit Card/ Credit Card</label>
          </form>

          <div>
            {debit ? (
              <div style={{ margin: "auto" }}>
                <form onSubmit={payment}>
                  <label htmlFor="">Card Number:</label> <br />
                  <input
                    className="arfeen_class"
                    type="number"
                    onChange={(e) => arfeenChange(e)}
                  />{" "}
                  <br />
                  <label htmlFor="">Valid thru</label> <br />
                  <input
                    className="arfeen_class"
                    type="month"
                    onChange={(e) => handleChange(e)}
                  />{" "}
                  <br />
                  <label htmlFor="">CVV</label> <br />
                  <input
                    style={{
                      //   borderRadius: "15px",
                      width: "400px",
                      fontSize: "20px",
                      padding: "5px",
                      border: "2px solid black",
                    }}
                    className="arfeen_class"
                    type="text"
                    onChange={(e) => checkCvv(e)}
                  />{" "}
                  <br />
                  <input className="bhushan_button" type="Submit" value="Pay" />
                </form>
              </div>
            ) : (
              ""
            )}

            {otp && !error ? (
              <div>
                <form
                  action=""
                  onSubmit={() => {
                    alert("Payment Successfull");
                    setOtp(false);
                    navigate(`/`);
                  }}
                  style={{ marginBottom: "50px" }}
                >
                  <label htmlFor="">One Time Password</label> <br />
                  <input
                    className="arfeen_class"
                    type="text"
                    style={{
                      width: "180px",
                    //   borderRadius: "15px",
                      height: "40px",
                        border: "2px solid black",
                      width:"100%",
                    }}
                  />{" "}
                  <br />
                  <input
                    className="bhushan_button"
                    type="Submit"
                    value={"Confirm"}
                  />
                </form>
              </div>
            ) : (
              ""
            )}
          </div>

          {cod ? (
            <div>
              <button
                onClick={() => {
                  alert("Order Sucessful");
                  navigate(`/`);
                }}
                className="bhushan_button1"
              >
                For Confirmation Click Here
              </button>
            </div>
          ) : (
            " "
          )}
        </div>
      </div>
    </>
  );
}

export default Pay;

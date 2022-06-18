import React from "react";
import "./checkout.css";
import { Link } from "react-router-dom";
import { Pay } from "./Pay";

function Checkout() {
  return (
    <>
      <div id="inner-container-checkout">
        <div>
          <p
            style={{
              fontFamily: "Fira Sans",
              fontSize: "40px",
              fontWeight: "900",
              marginBottom: "50px",
              textAlign: "center",
              marginTop: "-60px",
              color: "#2874f0",
            }}
          >
            Billing Details
          </p>
          <div id="checkout_form">
            <form
              action=""
              id="myForm"
              style={{ padding: "50px", paddingBottom: "30px" }}
            >
              <div id="name-checkout">
                <div>
                  <div className="inner">
                    <label for="">
                      First name <sup>*</sup>
                    </label>
                    <input
                      type="text"
                      style={{
                        // borderRadius: "30px",
                        padding: "18px",
                        border: "1px solid black",
                        width: "96%",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="inner">
                    <label for="">
                      Last name <sup>*</sup>
                    </label>
                    <input
                      type="text"
                      style={{
                        // borderRadius: "30px",
                        padding: "18px",
                        border: "1px solid black",
                        width: "96%",
                      }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  for=""
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  Country / Region <sup>*</sup>
                </label>
                <select
                  name=""
                  id=""
                  style={{ width: "96%", border: "1px solid black" }}
                >
                  <option value="India">India</option>
                </select>
              </div>

              <div>
                <label
                  for=""
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  State <sup>*</sup>
                </label>
                <select
                  name=""
                  id="selectOption"
                  style={{ width: "96%", border: "1px solid black" }}
                >
                  <option value="Telangana">Maharashtra</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Maharashtra">Telangana</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="West-bengal">West Bengal</option>
                </select>
              </div>

              <div>
                <label
                  for=""
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  Town / City <sup>*</sup>
                </label>
                <input
                  type="text"
                  style={{
                    // borderRadius: "30px",
                    padding: "18px",
                    width: "96%",
                    border: "1px solid black",
                  }}
                />
              </div>

              <div>
                <label
                  for=""
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  PIN <sup>*</sup>
                </label>
                <input
                  type="number"
                  style={{
                    // borderRadius: "30px",
                    padding: "18px",
                    width: "96%",
                    border: "1px solid black",
                  }}
                />
              </div>
              <div>
                <label
                  for=""
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  Phone <sup>*</sup>
                </label>
                <input
                  type="number"
                  style={{
                    // borderRadius: "30px",
                    padding: "18px",
                    width: "96%",
                    border: "1px solid black",
                  }}
                />
              </div>
              <div>
                <label
                  for=""
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  Email address <sup>*</sup>
                </label>
                <input
                  type="email"
                  style={{
                    // borderRadius: "30px",
                    padding: "18px",
                    width: "96%",
                    border: "1px solid black",
                  }}
                />
              </div>

              <Link
                to="/registration"
                style={{ display: "flex", justifyContent: "center" }}
                className="createAc"
              >
                Create an account
              </Link>

              <div style={{ display: "flex", justifyContent: "center" }}>
                <Link to="/payment">
                  ​<button className="Chkbtn">Place Order</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;

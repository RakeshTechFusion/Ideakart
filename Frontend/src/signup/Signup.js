import React, { useState } from "react";
import "./signUp.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// user have to enter name, mobile, email, password, confirm password

const SignUp = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const user = {
        name,
        mobile,
        email,
        password,
      };
      try {
        const res = await axios.post("https://ideakart.herokuapp.com/user/signup", user);
        console.log(res);
        if (res.status === 201) {
          navigate("/login");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("password not matched");
    }
  };

  return (
    <div className="signup">
      <div className="signup__container">
        <h1 className="signup__heading">Sign Up</h1>
        <form className="signup__form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            className="signup__input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Mobile"
            className="signup__input"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="signup__input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="signup__input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="signup__input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="signup__button">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
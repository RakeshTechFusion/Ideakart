const { Router } = require("express");
require("dotenv").config();
const userRouter = Router();
const jwt = require("jsonwebtoken");
const users = require("../models/user");

userRouter.post("/signup", async (req, res) => {
  const { name, mobile, email, password } = req.body;
  if (!name || !mobile || !email || !password) {
    return res.status(422).json({ error: "fill every details" });
  }
  try {
    const userExist = await users.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "email already exists" });
    } else {
      const user = new users({ name, mobile, email, password, token: "" });
      await user.save();
      res.status(201).json({ message: "Registered successfully", user: user });
    }
  } catch (err) {
    console.log(err);
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const validUser = await users.find({ $and: [{ email }, { password }] });

  if (validUser.length > 0) {
    const token = jwt.sign(
      {
        name: users.name,
        mobile: users.mobile,
        email: users.email,
        password: users.password,
      },
      process.env.SECRET_KEY
    );
    await users.findOneAndUpdate({ email: req.body.email }, { token: token });
    return res
      .status(201)
      .send({ message: "Login Sucess", token: token, validUser });
  }
  return res.status(401).send({ message: "Invalid User" });
});

userRouter.post("/logout", async (req, res) => {
  try {
    const { token } = req.headers;
    const user = await users.findOne({ token: token });
    console.log("user:", user);
    if (user) {
      user.token = "";
      await user.save();
      res.status(200).json({ message: "logout successfully" });
    } else {
      res.status(400).json({ error: "invalid token" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = userRouter;

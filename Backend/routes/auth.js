const { Router } = require("express");
require("dotenv").config();
const userRouter = Router();
const jwt = require("jsonwebtoken");
const users = require("../models/user");

userRouter.post("/signup", async (req, res) => {
  try {
    const { name, mobile, email, password, confirmPassword } = req.body;
    if (!name || !mobile || !email || !password || !confirmPassword) {
      return res.status(422).json({ error: "Please fill all the fields" });
    }
    const userExist = await users.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    } else if (password !== confirmPassword) {
      return res.status(422).json({ error: "Password not matched" });
    } else {
      const user = new users({ name, mobile, email, password, confirmPassword });
      await user.save();
      res.status(201).json({ message: "User registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await users.findOne({ email });
    if (user.password === password) {
      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY,{expiresIn: "7d"});
      res.status(200).json({
        status: "success",
        token,
      });
    }
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
});

userRouter.post("/logout", async (req, res) => {
  res.status(200).json({
    status: "success",
  });
});

module.exports = userRouter;

const express = require("express");
const dotenv = require('dotenv')
const userRouter = require('./routes/auth')
const products = require("./model/products");
const app = express();
require("dotenv").config();
const connect = require('./storage/db')
const cors = require('cors')
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(
    cors({
        origin: ["http://localhost:3000"],
    })
    );
    
app.use('/user',userRouter)
app.get("/products", async (req, res) => {
    const Products = await products.find();
    
  
    res.status(201).send(Products);
  });

app.get('/',(req,res)=>{
    res.send("Server started")
})
app.listen(process.env.PORT||8080,async()=>{
    await connect;
    console.log("connected to db")
    console.log("server started")
})
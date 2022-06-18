const mongoose = require("mongoose");
require("dotenv").config();
const { ServerApiVersion } = require("mongodb");
const productsdata = require("./productdata.js");
// const IdeakartProducts = require("../models/ProdMod");

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
};

const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@projectdb.bupnbmu.mongodb.net/?retryWrites=true&w=majority`;

const connection = mongoose
  .connect(uri, connectionParams)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

// async function main() {
//   const conn = await connection;
//   console.log("connected to db");
//   productsdata.map(async (el) => {
//     const data = new IdeakartProducts(el);
//     await data.save();
//     console.log("data posted!");
//   });

//   conn.disconnect();
// }
// main();

module.exports = connection;

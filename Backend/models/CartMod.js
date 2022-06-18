const { Schema, model } = require("mongoose");

const cartSchema = new Schema({
  name: String,
  image: String,
  qty: { type: Number, default: 1, min: 1 },
  price: Number,
});

const cart = model("cart", cartSchema);

module.exports = cart;

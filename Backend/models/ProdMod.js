const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  name: String,
  image: String,
  description: String,
  qty: { type: Number, default: 1, min: 1 },
  price: String,
});

const IdeakartProducts = model("IdeakartProducts", productSchema);

module.exports = IdeakartProducts;

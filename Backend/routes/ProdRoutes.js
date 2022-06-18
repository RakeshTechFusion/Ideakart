const { Router } = require("express");
const IdeakartProducts = require("../models/ProdMod");

const productRouter = Router();

productRouter.get("/get", async (req, res) => {
  let productitems = await IdeakartProducts.find();
  res.status(201).send(productitems);
});

productRouter.get("/get/:id", async (req, res) => {
  const { id } = req.params;
  let item = await IdeakartProducts.findById(id);
  res.send(item);
});

productRouter.patch("/patch/qty", async (req, res) => {
  const { count } = req.body;
  const { id } = req.query;
  let inc = await IdeakartProducts.findByIdAndUpdate(id, {
    $inc: { qty: count },
  });
  res.send(inc);
});

module.exports = productRouter;

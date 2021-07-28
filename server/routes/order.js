const express= require('express')
const {userAuth} = require('../middleware/userAuth')
const {AdminAuth}= require('../middleware/AdminAuth')
const Order = require('../models/orderSchema')

const router= express.Router();

  router.post("/api/orders", async (req, res) => {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.address ||
      !req.body.total ||
      !req.body.cartItems
    ) {
      return res.send({ message: "Data is required." });
    }
    const order = await Order(req.body).save();
    res.send(order);
  });
  router.get("/api/orders", async (req, res) => {
    const orders = await Order.find({});
    res.send(orders);
  });
  router.delete("/api/orders/:id", async (req, res) => {
    const order = await Order.findByIdAndDelete(req.params.id);
    res.send(order);
  });
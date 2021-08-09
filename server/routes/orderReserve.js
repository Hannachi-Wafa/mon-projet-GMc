const express= require('express')
const {userAuth} = require('../middleware/userAuth')
const {AdminAuth}= require('../middleware/AdminAuth')
const OrderReserve = require('../models/orderReserveSchema')

const router= express.Router();

  router.post("/ordersRese", async (req, res) => {
    if (
      !req.body.name ||
      !req.body.email ||
      !req.body.address ||
      !req.body.total ||
      !req.body.cartrItems
    ) {
      return res.send({ message: "Data is required." });
    }
    const orderRese = await OrderReserve(req.body).save();
    res.send(orderRese);
  });
  router.get("/ordersRese",AdminAUth, async (req, res) => {
    const orderRese = await OrderReserve.find({});
    res.send(orderRese);
  });
  router.delete("/api/ordersRese/:id", async (req, res) => {
    const orderRese = await OrderReserve.findByIdAndDelete(req.params.id);
    res.send(orderRese);
  });
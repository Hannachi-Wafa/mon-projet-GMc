const express= require('express');
const { getorder, createorder, deleteorder } = require('../controlles/orderRes');
const {userAuth} = require('../middleware/userAuth')
const {AdminAuth}= require('../middleware/AdminAuth')

const router= express.Router();

  router.post('/orders',createorder);
router.get('/orders',getorder)
  router.delete("/orders/:id", deleteorder)
  module.exports = router
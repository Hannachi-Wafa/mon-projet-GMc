const express=require('express');
const { addCart,register, login,getUser, updateuser } = require('../controlles/user');
const validateUser = require('../controlles/validateUser');
const {userAuth} = require('../middleware/userAuth')
const {AdminAuth}= require('../middleware/AdminAuth')
const router= express.Router();

router.post('/newuser',validateUser,register)
router.post('/login',login)
router.get('/',getUser)
router.put('/user/:id',userAuth,validateUser,updateuser)

module.exports=router;
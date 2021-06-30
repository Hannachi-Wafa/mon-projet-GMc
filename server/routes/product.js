const express= require('express')
const {createProduct,deleteProduct,updateProduct,getProduct} = require('../controlles/product')
const {userAuth} = require('../middleware/userAuth')
const {AdminAuth}= require('../middleware/AdminAuth')
const router= express.Router();
const Products = require('../models/productSchema')

const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + -'-' + file.originalname)
    }
})
var upload = multer({ storage: storage })


router.post('/newproducts', userAuth,AdminAuth,upload.single('images'), createProduct)
router.get('/products',getProduct)

router.delete('/products/:id',userAuth, AdminAuth, deleteProduct)
router.put('/products/:id', userAuth, AdminAuth,updateProduct)



module.exports = router
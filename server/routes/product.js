const express= require('express')
const {getProductbycategory,getProductbyid,createProduct,deleteProduct,updateProduct,getProduct,updateimage} = require('../controlles/product')
const {userAuth} = require('../middleware/userAuth')
const {AdminAuth}= require('../middleware/AdminAuth')
const router= express.Router();

const multer = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        if(file)
        cb(null, file.fieldname + '-' + Date.now() + -'-' + file.originalname)
    }
})
var upload = multer({ storage: storage })


router.post('/newproducts', userAuth,AdminAuth,upload.single('images'), createProduct)
router.get('/products/',getProduct)
router.get('/products/:id',getProductbyid)


router.delete('/products/:id',userAuth, AdminAuth, deleteProduct)
router.put('/products/:id', userAuth, AdminAuth,upload.single('images'),updateProduct)
//router.put('/products/image/:id', userAuth, AdminAuth,upload.single('images'), updateimage)



module.exports = router
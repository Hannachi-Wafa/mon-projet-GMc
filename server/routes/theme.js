const express= require('express')
const {createtheme,deletetheme,updatetheme,gettheme} = require('../controlles/theme')
const {userAuth} = require('../middleware/userAuth')
const {AdminAuth}= require('../middleware/AdminAuth')
const router= express.Router();
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
router.get('/theme',gettheme)
router.post('/newtheme', userAuth,AdminAuth,upload.single('images'),createtheme)

router.delete('/theme/:id',userAuth, AdminAuth, deletetheme)
router.put('/theme/:id', userAuth, AdminAuth,updatetheme)



module.exports = router
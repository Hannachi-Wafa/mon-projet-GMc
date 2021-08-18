const express= require('express')
const {createtheme,deletetheme,updatetheme,gettheme,getthemebyid} = require('../controlles/theme')
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
router.get('/theme/:id',getthemebyid)

router.delete('/theme/:id',userAuth, AdminAuth, deletetheme)
router.put('/theme/:id', userAuth, AdminAuth,updatetheme)

//creeat  date
router.post("/dates", userAuth, async (req, res) => {
    let dates = req.body.date
    try {
  
      const themeDates = await ThemeDate.deleteMany({ themeId: req.body.themeId, date_type: 'blocked' });
      let body = { date: dates, themeId: req.body.themeId, date_type: 'blocked' }
      const themeDate = new ThemeDate(body)
      themeDate.save();
      res.status(201).send(themeDate);
      console.log('res:', themeDate)
  
    } catch (err) {
      res.status(400).send(err);
      console.log('err', err)
    }
  
  });



module.exports = router
const express= require('express')
const {createreservation,deletereservation,checkAvailability,updatereservation,getreservation} = require('../controlles/reservation')
const {userAuth} = require('../middleware/userAuth')
const {AdminAuth}= require('../middleware/AdminAuth')
const router= express.Router();

router.get('/reservation',getreservation)
router.post('/newreservation', userAuth,createreservation)

router.delete('/reservation/:id',userAuth ,deletereservation)
router.put('/reservation/:id', userAuth,updatereservation)
router.get('/check',checkAvailability)



module.exports = router
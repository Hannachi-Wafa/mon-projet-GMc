const { check, validationResult } = require('express-validator')

const router = require('express').Router()

const userControl = require('./lib/userControl')
const secureRoute = require('./lib/secureRoute')
const userFunc = require('./controllers/userFunc')
const appointmentFunc =  require('./controllers/appointmentFunc')
const historyFunc = require('./controllers/historyFunc')
const medicinesFunc = require('./controllers/medicinesFunc')



// ************************ Medicines ************************
router.route('/themes')
  .post(secureRoute, medicinesFunc.create)
  .get(medicinesFunc.index)



// ************************ appointments ************************
router.post('/appointment', secureRoute, userControl('user2Normal'),
  [
    check('reason').not().isEmpty().trim().escape()
  ], appointmentFunc.create)


router.route('/appointment')
  .get(secureRoute, appointmentFunc.index)


router.route('/appointment/doc/:name')
  .get(secureRoute, appointmentFunc.themeAppointment)


router.route('/appointment/:id')
  .delete(secureRoute, appointmentFunc.remove)
  .get(secureRoute, appointmentFunc.show)



// ************************ history ************************
router.post('/history', secureRoute, userControl('themeType'),
  [
    check('content').not().isEmpty().trim().escape()
  ],  historyFunc.create)

router.route('/history')
  .get(secureRoute, userControl('themeType'), historyFunc.index)


router.route('/history/theme')
  .get(secureRoute, historyFunc.themeHistory)

router.route('/history/:id')
  .get(secureRoute, historyFunc.show)
  .delete(secureRoute, userControl('themeType'), historyFunc.remove)



// ************************ user ************************
router.post('/register',
  [
    check('username').isLength({ min: 2 }).trim().escape(),
    check('email').isEmail().normalizeEmail(),
    check('password').not().isEmpty().trim().escape()
  ], 
  userFunc.register)


router.post('/login',
  [
    check('email').isEmail().normalizeEmail(),
    check('password').not().isEmpty().trim().escape()
  ],
  userFunc.login)

router.route('/user')
  .get(secureRoute, userFunc.index)


router.route('/themeTypes')
  .get(secureRoute, userFunc.themeTypes)

router.route('/themes')
  .get(secureRoute, userControl('themeType'), userFunc.themes)


router.route('/user/:id')
  .get(secureRoute, userFunc.show)



module.exports = router
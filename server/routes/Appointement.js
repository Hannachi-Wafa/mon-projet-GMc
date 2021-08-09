const { check, validationResult } = require('express-validator')

const router = require('express').Router()

const userControl = require('./lib/userControl')
const secureRoute = require('./lib/secureRoute')
const userFunc = require('./controllers/userFunc')
const appointmentFunc =  require('./controllers/appointmentFunc')
const historyFunc = require('./controllers/historyFunc')
const medicinesFunc = require('./controllers/themesFunc')



// ************************ Medicines ************************
router.route('themes')
  .post(secureRoute, themesFunc.create)
  .get(themesFunc.index)



// ************************ appointments ************************
router.post('/appointment', secureRoute, userControl('theme'),
  [
    check('reason').not().isEmpty().trim().escape()
  ], appointmentFunc.create)


router.route('/appointment')
  .get(secureRoute, appointmentFunc.index)


router.route('/appointment/the/:name')
  .get(secureRoute, appointmentFunc.themeTypeAppointment)


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
  .get(secureRoute, historyFunc.patientHistory)

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
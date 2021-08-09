const { check, validationResult } = require('express-validator')
const User = require('../models/User2')
// const Appointment = require('../models/Appointment')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')


function register(req, res) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  } else { 
    User.create(req.body) // same as creating any other resource, see animals create controller, except runs our extra pre 'save' and 'validate' methods. See /models/User for these.
      .then((user) =>
        res
          .status(200)
          .json({ message: `Hello ${user.user2name}, thank you for registering` })
      )
      // .catch(next)
      .catch((err) => {
        console.log(err.errors)
        res.status(422).json(err.errors)
      })
  }  
}

// login route -/login
// user supplies in body of request, email and password only
function login(req, res) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  } else {
    User.findOne({ email: req.body.email }) //find the user by that email
      .then((user) => {
        //check to if we found a record and the password provided matches what is in the database
        if (!user || !user.validatePassword(req.body.password)) {
          return res.status(401).json({ message: 'Unauthorized' }) // send a response of unauthorized and end the process here
        }
        const token = jwt.sign({ sub: user._id }, secret, { expiresIn: '12h' }) // if all good, create a JSON web token (jwt), baking in the user id, a secret to encode/decode and an expiry time for the token
        res.status(202).json({ message: `Hello ${user.user2name}`, token, user })
      }) //finally send back a message with that created token
      .catch(() => res.status(401).json({ message: 'Unauthorized' }))
  }  
  
}

function index(req, res) {
  User.find()
    // .populate('appointment.user')
    .then((user) => res.status(200).json(user))
    .catch((err) => res.json(err))
}

// version 1
function show(req, res) {
  User.findById(req.params.id)
    // ..and populate all of the appointment associated with it
    .populate('appointment')
    .populate('history')
    .then((user) => {
      if (!user) res.status(404).json({ message: 'User Not Found' })
      return res.status(200).json(user)
    })
    .catch((err) => console.log(err))
}

function themeTypes(req, res) {
  User.find({ role: 'user2Normal' })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.json(err))
}

function themes(req, res) {
  User.find({ role: 'admin' })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.json(err))
}

module.exports = {
  register,
  login,
  index,
  show,
  themeTypes,
  themes
}

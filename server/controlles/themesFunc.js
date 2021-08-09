const Themes = require('../models/Themes')


function create(req, res) {
  Themes
    .create(req.body)
    .then(() => res.status(201).json({ message: ' created' }))
    .catch(err => res.json(err))
}

function index(req, res) {
  Themes
    .find()
    .then(meds => res.status(200).json(meds))
    .catch(err => res.json(err))
}




module.exports = {
  create,
  index
}
const express = require('express')
const router = express.Router()
const User = require('../models/users.js')

//Log In
router.get('/new', (req, res) => {
  res.render('sessions/new.ejs')
})

//Set cookie
router.post('/', (req, res) => {
  User.findOne({username: req.body.username}, (error, foundUser) => {
    req.session.username = foundUser.username
    res.redirect('/tattoos')
  })
})

module.exports = router

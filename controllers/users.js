const express = require('express')
const router = express.Router()
const User = require('../models/users.js')

mistake = false

//Create user
router.get('/new', (req, res) => {
  res.render('users/new.ejs', {
    mistake: mistake
  })
})

//Set cookie
router.post('/', (req, res) => {
  User.create(req.body, (error, createdUser) => {
    if(createdUser){
      req.session.username = createdUser.username
      res.redirect('/tattoos')
    } else {
      mistake = true
      res.redirect('/users/new')
    }
  })
})

module.exports = router

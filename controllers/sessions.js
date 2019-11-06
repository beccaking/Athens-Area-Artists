const express = require('express')
const router = express.Router()
const User = require('../models/users.js')

flag = false
//Log In
router.get('/new', (req, res) => {
    res.render('sessions/new.ejs', {
      flag: flag
    })
})

//Set cookie
router.post('/', (req, res) => {
  User.findOne({username: req.body.username}, (error, foundUser) => {
    if(foundUser){
        if(foundUser.password === req.body.password){
        req.session.username = foundUser.username
        res.redirect('/tattoos')
      } else {
        flag = true
        res.redirect('/sessions/new')
      }
    } else {
      flag = true
      res.redirect('/sessions/new')
    }
  })
})

module.exports = router

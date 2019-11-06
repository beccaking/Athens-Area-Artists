const express = require('express')
const router = express.Router()
const tattoos = require('../models/tattoos.js')
const Collection = require('../models/collection.js')


//Collection page with save buttons, Logged in only
router.get('/', (req, res) => {
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: tattoos,
      username: req.session.username
    })
  } else {
    flag=false
    res.redirect('/')
  }
})

//Save a tattoo from the index page to your collection, Logged in only
router.post('/my-collection/:id', (req, res) => {
    Collection.create(tattoos[req.params.id], {user: req.session.username}, (error, createdUser) => {
      res.redirect('/tattoos')
    })
})

//Personal collection page, Logged in only
router.get('/my-collection', (req, res) => {
    Collection.find({user:req.session.username}, (error, allTattoos) => {
      res.render('tattoos/collection.ejs', {
        tattoos: allTattoos
      })
    })
})

//Tattoo show page with save button
router.get('/:id', (req, res) => {
  res.render('tattoos/show.ejs', {
    tattoo: tattoos[req.params.id],
    index: req.params.id
  })
})

//Log Out
router.delete('/', (req, res) => {
  req.session.username = false
  res.redirect('/')
  flag = false
})


module.exports = router

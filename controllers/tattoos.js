const express = require('express')
const router = express.Router()
const tattoos = require('../models/tattoos.js')
const Collection = require('../models/collection.js')

//Routes for a logged-in user

//Index page with save buttons
router.get('/', (req, res) => {
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: tattoos,
      username: req.session.username,
      tabTitle: 'Tattoos'
    })
  } else {
    flag=false
    res.redirect('/')
  }
})
//Personal collection page
router.get('/my-collection', (req, res) => {
    Collection.find({user:req.session.username}, (error, allTattoos) => {
      res.render('tattoos/collection.ejs', {
        tattoos: allTattoos,
        tabTitle: 'My Collection'
      })
    })
})
//Index show page with save button
router.get('/:id', (req, res) => {
  res.render('tattoos/show.ejs', {
    tattoo: tattoos[req.params.id],
    index: req.params.id,
    tabTitle: tattoos[req.params.id].artist
  })
})
//Create page
router.get('/my-collection/create', (req, res) => {
  res.render('tattoos/create.ejs', {
    tabTitle: 'Add new tattoo'
  })
})
//Edit page
router.get('/my-collection/:id/edit', (req, res) => {
  Collection.findById(req.params.id, (error, foundObject) => {
    res.render('tattoos/edit.ejs', {
      tattoo: foundObject,
      tabTitle: 'Edit'
    })
  })
})
//Personal collection show page
router.get('/my-collection/:id', (req, res) => {
  Collection.find({user:req.session.username}, (error, allTattoos) => {
    res.render('tattoos/collectionshow.ejs', {
      tattoo: allTattoos[req.params.id],
      tabTitle: allTattoos[req.params.id].artist
    })
  })
})
//Create route, brand new
router.post('/my-collection', (req, res) => {
  Collection.create(req.body, (error, createdElement) => {
    Collection.findByIdAndUpdate(createdElement.id, {$set:{user: req.session.username}}, (error, updatedElement) => {
      res.redirect('/tattoos/my-collection')
      })
    })
  })
//Create route, save from index page
router.post('/my-collection/:id', (req, res) => {
    Collection.create(tattoos[req.params.id], (error, createdElement) => {
      Collection.findByIdAndUpdate(createdElement.id, {$set: {user: req.session.username}}, (error, updatedElement) => {
          res.redirect('/tattoos')
      })
    })
})

//Log Out
router.delete('/', (req, res) => {
  req.session.username = false
  res.redirect('/')
  flag = false
})

//Delete an item from collection
router.delete('/my-collection/:id', (req, res) => {
  Collection.findByIdAndRemove(req.params.id, (error, deletedObject) => {
    res.redirect('/tattoos/my-collection')
  })
})


//Update route
router.put('/my-collection/:id/edit', (req, res) => {
  Collection.findByIdAndUpdate(req.params.id, {$set: {artist: req.body.artist}}, (error, UpdatedElement) => {
    Collection.findByIdAndUpdate(req.params.id, {$set: {studio: req.body.studio}}, (error, UpdatedElement) => {
      Collection.findByIdAndUpdate(req.params.id, {$set: {date: req.body.date}}, (error, UpdatedElement) => {
        Collection.findByIdAndUpdate(req.params.id, {$set: {img: req.body.img}}, (error, UpdatedElement) => {
            res.redirect('/tattoos/my-collection')
        })
      })
    })
  })
})

module.exports = router

const express = require('express')
const router = express.Router()
const tattoos = require('../models/tattoos.js')
const Collection = require('../models/collection.js')

//Routes for a logged-in user

router.get('/religious', (req, res) => {
  const religiousTattoos = tattoos.filter(tattoo => (tattoo.design[0] === 'Religious' || tattoo.design[1] === 'Religious'))
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: religiousTattoos,
      tabTitle: req.session.username
    })
  } else {
    flag=false
    res.redirect('/')
  }
})

router.get('/sci-fi', (req, res) => {
  const scifiTattoos = tattoos.filter(tattoo => (tattoo.design[0] === 'Sci-Fi' || tattoo.design[1] === 'Sci-Fi'))
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: scifiTattoos,
      tabTitle: req.session.username
    })
  } else {
    flag=false
    res.redirect('/')
  }
})

router.get('/abstract', (req, res) => {
  const abstractTattoos = tattoos.filter(tattoo => (tattoo.design[0] === 'Abstract' || tattoo.design[1] === 'Abstract'))
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: abstractTattoos,
      tabTitle: req.session.username
    })
  } else {
    flag=false
    res.redirect('/')
  }
})

router.get('/nature', (req, res) => {
  const natureTattoos = tattoos.filter(tattoo => (tattoo.design[0] === 'Nature' || tattoo.design[1] === 'Nature'))
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: natureTattoos,
      tabTitle: req.session.username
    })
  } else {
    flag=false
    res.redirect('/')
  }
})

router.get('/skeletons', (req, res) => {
  const skeletonTattoos = tattoos.filter(tattoo => (tattoo.design[0] === 'Skeleton' || tattoo.design[1] === 'Skeleton'))
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: skeletonTattoos,
      tabTitle: req.session.username
    })
  } else {
    flag=false
    res.redirect('/')
  }
})

router.get('/joshua-mullins', (req, res) => {
  const joshuaTattoos = tattoos.filter(tattoo => tattoo.studio === 'Joshua Mullins Tattooing')
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: joshuaTattoos,
      tabTitle: req.session.username
    })
  } else {
    flag=false
    res.redirect('/')
  }
})

router.get('/decorative-injections', (req, res) => {
  const decorativeTattoos = tattoos.filter(tattoo => tattoo.studio === 'Decorative Injections Tattooing & Body Piercing')
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: decorativeTattoos,
      tabTitle: req.session.username
    })
  } else {
    flag=false
    res.redirect('/')
  }
})

router.get('/thunder-bunny', (req, res) => {
  const thunderbunnyTattoos = tattoos.filter(tattoo => tattoo.studio === 'Thunder Bunny Tattoo Parlor')
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: thunderbunnyTattoos,
      tabTitle: req.session.username
    })
  } else {
    flag=false
    res.redirect('/')
  }
})

router.get('/skin-hooked', (req, res) => {
  const skinhookedTattoos = tattoos.filter(tattoo => tattoo.studio === 'Skin Hooked Tattoo & Body Piercing')
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: skinhookedTattoos,
      tabTitle: req.session.username
    })
  } else {
    flag=false
    res.redirect('/')
  }
})

router.get('/joshua', (req, res) => {
  const joshuaTattoos = tattoos.filter(tattoo => tattoo.artist === 'Joshua Mullins')
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: joshuaTattoos,
      tabTitle: req.session.username
    })
  } else {
    flag=false
    res.redirect('/')
  }
})

router.get('/jim', (req, res) => {
  const jimTattoos = tattoos.filter(tattoo => tattoo.artist === 'Jim Kisor')
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: jimTattoos,
      tabTitle: req.session.username
    })
  } else {
    flag=false
    res.redirect('/')
  }
})

router.get('/eric', (req, res) => {
  const ericTattoos = tattoos.filter(tattoo => tattoo.artist === 'Eric Pierce')
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: ericTattoos,
      tabTitle: req.session.username
    })
  } else {
    flag=false
    res.redirect('/')
  }
})

router.get('/bobby', (req, res) => {
  const bobbyTattoos = tattoos.filter(tattoo => tattoo.artist === 'Bobby Avalos')
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: bobbyTattoos,
      tabTitle: req.session.username
    })
  } else {
    flag=false
    res.redirect('/')
  }
})

router.get('/garrett', (req, res) => {
  const garrettTattoos = tattoos.filter(tattoo => tattoo.artist === 'Garrett Hyatt')
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: garrettTattoos,
      tabTitle: req.session.username
    })
  } else {
    flag=false
    res.redirect('/')
  }
})

router.get('/brad', (req, res) => {
  const bradTattoos = tattoos.filter(tattoo => tattoo.artist === 'Brad Clabaugh')
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: bradTattoos,
      tabTitle: req.session.username
    })
  } else {
    flag=false
    res.redirect('/')
  }
})

router.get('/shawn', (req, res) => {
  const shawnTattoos = tattoos.filter(tattoo => tattoo.artist === 'Shawn Hawks')
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: shawnTattoos,
      tabTitle: req.session.username
    })
  } else {
    flag=false
    res.redirect('/')
  }
})

router.get('/charlie', (req, res) => {
  const charlieTattoos = tattoos.filter(tattoo => tattoo.artist === 'Charlie Vieregge')
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: charlieTattoos,
      tabTitle: req.session.username
    })
  } else {
    flag=false
    res.redirect('/')
  }
})

//Index page with save buttons
router.get('/', (req, res) => {
  if(req.session.username){
    res.render('tattoos/index.ejs', {
      allTattoos: tattoos,
      tabTitle: req.session.username
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
router.get('/my-collection/show/:id', (req, res) => {
  Collection.find({user:req.session.username}, (error, allTattoos) => {
    res.render('tattoos/collectionshow.ejs', {
      tattoo: allTattoos[req.params.id],
      tabTitle: allTattoos[req.params.id].artist
    })
  })
})
//Index show page with save button
router.get('/show/:id', (req, res) => {
  const element = tattoos.filter(tattoo => tattoo.index === req.params.id)
  res.render('tattoos/show.ejs', {
    tattoo: element[0],
    tabTitle: element[0].artist
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
  const element = tattoos.filter(tattoo => tattoo.index === req.params.id)
    Collection.create(element, (error, createdElement) => {
      Collection.findByIdAndUpdate(createdElement[0].id, {$set: {user: req.session.username}}, (error, updatedElement) => {
          res.redirect('/tattoos/my-collection')
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

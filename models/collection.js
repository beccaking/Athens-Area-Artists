const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  artist: String,
  studio: String,
  location: String,
  date: String,
  img: String,
  index: String,
  user: String
})

const Collection = mongoose.model('Collection', collectionSchema)

module.exports = Collection

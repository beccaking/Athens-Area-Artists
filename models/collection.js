const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
  artist: String,
  studio: String,
  date: String,
  img: String
})

const Collection = mongoose.model('Collection', collectionSchema)

module.exports = Collection

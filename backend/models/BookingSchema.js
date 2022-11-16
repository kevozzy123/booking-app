const mongoose = require('mongoose')

const Schema = mongoose.Schema

const BookingSchema = new Schema({
    name: String,
    summary: String
})

module.exports = mongoose.model('Listings-and-reviews', {})
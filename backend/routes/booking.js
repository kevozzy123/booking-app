const express = require('express')
const Booking = require('../models/BookingSchema')
const router = express.Router()

async function main() {
    const MongoClient = require('mongodb').MongoClient
    const uri = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.o72ts.mongodb.net/sample_airbnb?retryWrites=true&w=majority'
    const client = new MongoClient(uri, { useNewUrlParser: true })
    await client.connect();
    return client
    // await findListings(client, 5);
    // client.close();
}

async function findListings(client, resultsLimit) {
    const cursor = client
        .db('sample_airbnb')
        .collection('listingsAndReviews')
        .find()
        .limit(resultsLimit);
    
        const results = await cursor.toArray();
    return results
}

router.get('/hotel', async(req, res) => {
    const result = await Booking.find({}).limit(16)
    res.json({
        state: true,
        result: result
    })
})

module.exports = router
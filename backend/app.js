require('dotenv').config()

const express = require('express')
const path = require('path')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const mongoose = require('mongoose')
const bookingRouter = require('./routes/booking.js')
const userRouter = require('./routes/user')
const session = require('express-session')
const cookieParser = require("cookie-parser");
const jwt = require('jsonwebtoken')
const { expressjwt: expressJwt } = require('express-jwt')
const busboy = require('connect-busboy')
// express app
const app = express()

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(fileUpload({
    createParentPath: true,
    preserveExtension: true,
    uploadTimeout: 20000,
    limits: { fileSize: 500 * 1024 * 1024 },
}));

app.use(busboy({
    highWaterMark: 2 * 1024 * 1024,
    limits: {
        fileSize: 10 * 1024 * 1024,
    }
}));

app.use(busboy())

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
// app.use(cors({
//   origin: 'http://localhost:3000',  //Your Client, do not write '*'
//   credentials: true,
// }));

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use(cookieParser());
app.use(session({
    key: 'session.sid',
    secret: 'Some secret key',
    resave: true,
    saveUninitialized: true,
    cookie: {
        secure: false,
        maxAge: 600000
    }
}))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Credentials', true)
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type, POST, GET, OPTIONS, DELETE')
    next()
})

let tokenConfig = {
    sign: jwt.sign,
    secret: 'cant let you know what butt onion is',
    algorithms: ["HS256"],
}

app.use(async (req, res, next) => {
    try {
        req.token = tokenConfig
        await next()
    } catch (err) {
        if (err.status == 401) {
            res.status(401)
            res.json({
                state: false,
                msg: 'unauthorized'
            })
        } else {
            throw err
        }
    }
})

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('connected to database')
        // listen to port
    })
    .catch((err) => {
        console.log(err)
    })

// routes
app.use('/', userRouter)
app.use('/', bookingRouter)
// app.use(expressJwt(tokenConfig))

app.listen(process.env.PORT, () => {
    console.log('listening for requests on port', process.env.PORT)
})
// async function main() {
//     const MongoClient = require('mongodb').MongoClient
//     const uri = 'mongodb+srv://m001-student:m001-mongodb-basics@sandbox.o72ts.mongodb.net/sample_airbnb?retryWrites=true&w=majority'
//     const client = new MongoClient(uri, { useNewUrlParser: true })
//     await client.connect();
//     await findListings(client, 5);
//     client.close();
// }

// async function findListings(client, resultsLimit) {
//     const cursor = client
//         .db('sample_airbnb')
//         .collection('listingsAndReviews')
//         .find()
//         .limit(resultsLimit);

//     const results = await cursor.toArray();
//     return results

// }
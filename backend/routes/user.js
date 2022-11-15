const express = require('express')
const User = require('../models/UserSchema')
const bcrypt = require('bcrypt')
const router = express.Router()

router.get('/', async (req, res) => {
    let result = await User.find()
    res.status(200).json(result)
})

router.post('/', async (req, res) => {
    const { username, email, password } = req.body
    const signupAuth = await User.findOne({ email: email })
    console.log(signupAuth)
    try {
        if (signupAuth === null) {
            
                const hashedPassword = await bcrypt.hash(password, 10)
                let result = await User.create({ username, email, password: hashedPassword })
                res.status(200).json(result)
           
        } else {
            res.json({ msg: 'this email is already used' })
        }
    } catch(err) {
        console.log(err)
    }
})

router.patch('/updateuser', async (req, res) => {
    const { username, email } = req.body
    const user = await User.findOne({ email: email })
    try {
        // 如果你使用的是express的auth中间件，我们会在用户登录时，将其id存储在request的auth值中使用
        // 该值存储的属性名会根据中间件不同有差异
        // new: true配置会在数据更新后将其返回
        await User.findByIdAndUpdate(req.auth._id, updatedUser, { new: true })
    } catch(err) {
        res.json({ msg: 'error occured' })
    }
})



router.post('/login', async (req, res) => {
    const { email, password } = req.body
    console.log(email, password)
    let result = await User.findOne({ email: email })
    let match = await bcrypt.compare(password, result.password)
    console.log(result)
    console.log(match)

    try{
        if (match) {
            let tokenStr = req.token.sign(result.toJSON(), req.token.secret, {expiresIn: "24h"})
            res.status(200).json({ msg: 'good', token: 'Bearer ' + tokenStr })
        } else {
            res.json({ msg: 'incorrect email or password' })
        }
    } catch(err) {
        res.json({msg:'bad internet'})
    }
})

router.get('/logout', (req, res) => {
    
})

module.exports = router
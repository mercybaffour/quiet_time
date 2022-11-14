const UserSchema = require('../models/UserSchema')
const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()

// POST / register
router.post('/register', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password)
    return res.status(400).json({ msg: 'Password and email are required' })

  if (password.length < 8) {
    return res
      .status(400)
      .json({ msg: 'Password should be at least 8 characters long' })
  }

  const user = await UserSchema.findOne({ email }) // finding user in db
  if (user) return res.status(400).json({ msg: 'User already exists' })

  const newUser = new UserSchema({ email, password })
  // hashing the password
  bcrypt.hash(password, 7, async (err, hash) => {
    if (err)
      return res.status(400).json({ msg: 'error while saving the password' })

    newUser.password = hash
    const savedUserRes = await newUser.save()

    if (savedUserRes)
      return res.status(200).json({ msg: 'user is successfully saved' })
  })
})

// POST / login
router.post('/login', async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    res.status(400).json({ msg: 'Something missing' })
  }

  const user = await UserSchema.findOne({ email: email }) // finding user in db
  if (!user) {
    return res.status(400).json({ msg: 'User not found' })
  }

  // comparing the password with the saved hash-password
  const matchPassword = await bcrypt.compare(password, user.password)
  if (matchPassword) {

    const userSession = { email: user.email} // creating user session to keep user logged in also on refresh
    req.session.user = userSession // attach user session to session object from express-session

    return res
      .status(200)
      .json({ msg: 'You have logged in successfully', userSession }) //attach user session id to the response. It will be transferred in the cookies
  } else {
    return res.status(400).json({ msg: 'Invalid credential' })
  }
})


module.exports = router

const userSchema = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.user_create = async function (req, res) {   // FUNCTION TO CREATE NEW USER
  console.log(req.body)
  try {
    const newPassword = await bcrypt.hash(req.body.password, 10)
    console.log('bakabakabaka', newPassword)
    await user.create({
      name: req.body.name,
      email: req.body.email,
      password: newPassword,

    })
    res.json({ status: 'ok' })
  } catch (err) {
    res.json({ status: 'error', error: 'Duplicate email' })
  }
}
exports.user_login = async function (req, res) {     // FUNCTION TO CHECK LOGIN AUTHENTICATION
  const user = await userSchema.findOne({
    email: req.body.email,
  })
  const userName = await userSchema.findOne({ name: req.body.name })

  if (!user || !userName) {


    return (res.send({ status: 400, error: 'Invalid login' }
    ))
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  )
  console.log('check999', user.password)
  console.log('check', isPasswordValid)
  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      'hridhin#567#'

    )
    console.log('backend token', token)
    return res.json({ status: 'ok', user: token })
  } else {
    return res.json({ status: 'error', user: false })
  }
}
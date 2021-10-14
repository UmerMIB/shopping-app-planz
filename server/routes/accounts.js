const express = require('express'),
  accountsRouter = express.Router(),
  user = require('../model/user')

accountsRouter.route('/signup').post((req, res) => {
  const { body } = req
  let { name, email, password } = body
  console.log(`req.body`, req.body)
  if (!name) {
    return res.send({
      success: false,
      message: 'Error: Name cannot be empty',
    })
  }
  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be empty',
    })
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be empty',
    })
  }

  email = email.toLowerCase()

  /*Steps
    verify email
    save*/

  user.find(
    {
      email: email,
    },
    (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: err.message,
        })
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: 'Error: Account already exist.',
        })
      }

      const newUser = new user()

      newUser.email = email
      newUser.name = name
      newUser.password = newUser.generateHash(password)

      newUser.save((err, user) => {
        if (err) {
          return res.send({
            success: false,
            message: err.message,
          })
        }
        return res.send({
          success: true,
          message: 'Signed Up.',
        })
      })
    },
  )
})
accountsRouter.route('/signin').get((req, res) => {
  const { query } = req
  let { email, password } = query
  console.log(`req.query`, req.body)

  if (!email) {
    return res.send({
      success: false,
      message: 'Error: Email cannot be empty',
    })
  }
  if (!password) {
    return res.send({
      success: false,
      message: 'Error: Password cannot be empty',
    })
  }
  email = email.toLowerCase()
  user.find(
    {
      email: email,
    },
    (err, users) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error server error',
        })
      }
      if (users.length != 1) {
        return res.send({
          success: false,
          message: 'User doesnot exist',
        })
      }

      const User = users[0]
      if (!User.validPassword(password)) {
        return res.send({
          success: false,
          message: 'Error: Invalid password',
        })
      }

      return res.send({
        success: true,
        message: 'Valid signIn',
      })
    },
  )
})

module.exports = accountsRouter

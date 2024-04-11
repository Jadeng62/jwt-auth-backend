const express = require("express")
const user = express.Router()

const {authenticateToken} = require('../middlewares/authenticateToken.js')

user.get('/', authenticateToken, async (req, res) => {
    res.json({message: 'User Controller'})
})

module.exports = user;
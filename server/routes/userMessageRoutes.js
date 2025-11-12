const express = require('express')
const router = express.Router()
const UserMessageController = require('../src/controllers/userMessageController')

router.post('/contact', UserMessageController.SendMessageController)

module.exports = router

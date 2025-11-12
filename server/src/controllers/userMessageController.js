const userMessageService = require('../services/userMessageService')

module.exports.SendMessageController = async (req, res) => {
    try {
        console.log('Received body:', req.body);
        await userMessageService.SendMessageService(req.body)
        res.status(201).json({ message: 'Email sent successfully!' })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
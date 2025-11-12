const { getInContactEmail } = require('../utils/sendEmail')

module.exports.SendMessageService = (message) => {
    try {
        const UserMessageData = new UserMessage({
            name: message.name,
            email: message.email,
            phoneNumber: message.phoneNumber,
            message: message.message,
            dateCreated: new Date()
        })
        getInContactEmail(UserMessageData)
    } catch (error) {
        throw error
    }
}

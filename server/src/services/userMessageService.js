const getInContactEmail = require('../utils/sendEmail');
console.log('SendMessageService.js loaded');

module.exports.SendMessageService = async (message) => {
    try {
        const UserMessageData = {
            name: message.name,
            email: message.email,
            phoneNumber: message.phoneNumber,
            message: message.message,
            dateCreated: new Date()
        };
        await getInContactEmail(UserMessageData)
    } catch (error) {
        throw error
    }
}

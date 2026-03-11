const getInContactEmail = require('../utils/sendEmail');
console.log('SendMessageService.js loaded');

module.exports.SendMessageService = async (message) => {
  try {
    const UserMessageData = {
      name: message.name,
      email: message.email,
      message: message.message,
      dateCreated: new Date()
    };

    if (message.phoneNumber) {
      UserMessageData.phoneNumber = message.phoneNumber;
    }

    await getInContactEmail(UserMessageData);
  } catch (error) {
    throw error;
  }
};
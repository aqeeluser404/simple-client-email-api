const nodemailer = require('nodemailer')

const createMailTransporter = () => {
    console.log('Creating transporter with:', process.env.HOST_EMAIL_ADDRESS);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.HOST_EMAIL_ADDRESS,
            pass: process.env.HOST_EMAIL_PASSWORD
        }
    })
    return transporter
}

module.exports = createMailTransporter
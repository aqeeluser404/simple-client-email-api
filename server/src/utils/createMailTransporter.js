const nodemailer = require('nodemailer')

const createMailTransporter = () => {
    console.log('Creating transporter with:', process.env.HOST_EMAIL_ADDRESS);
    // const transporter = nodemailer.createTransport({
    //     service: 'gmail',
    //     auth: {
    //         user: process.env.HOST_EMAIL_ADDRESS,
    //         pass: process.env.HOST_EMAIL_PASSWORD
    //     }
    // })
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587, // or 465
        secure: false, // true for 465
        auth: {
            user: process.env.HOST_EMAIL_ADDRESS,
            pass: process.env.HOST_EMAIL_PASSWORD
        }
    });
    return transporter
}

module.exports = createMailTransporter
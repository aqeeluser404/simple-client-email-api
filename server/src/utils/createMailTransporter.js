// const nodemailer = require('nodemailer')

// const createMailTransporter = () => {
//     console.log('Creating transporter with:', process.env.HOST_EMAIL_ADDRESS);
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.HOST_EMAIL_ADDRESS,
//             pass: process.env.HOST_EMAIL_PASSWORD
//         }
//     })
//     // const transporter = nodemailer.createTransport({
//     //     host: 'in-v3.mailjet.com',
//     //     port: 587,
//     //     secure: false,
//     //     auth: {
//     //         user: process.env.MAILJET_API_KEY,
//     //         pass: process.env.MAILJET_SECRET_KEY
//     //     }
//     // });
//     // return transporter
// }

// module.exports = createMailTransporter

const nodemailer = require('nodemailer');

const createMailTransporter = () => {
    console.log('Creating Gmail transporter (Port 465) for:', process.env.HOST_EMAIL_ADDRESS);

    const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,  // Required for port 587
    auth: {
        user: process.env.HOST_EMAIL_ADDRESS,
        pass: process.env.HOST_EMAIL_PASSWORD
    },
    tls: { rejectUnauthorized: false },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 10000
    });

    return transporter;
};

module.exports = createMailTransporter;
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

const createMailTransporter = async () => {
    console.log('Creating Gmail transporter (Port 587) for:', process.env.HOST_EMAIL_ADDRESS);

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.HOST_EMAIL_ADDRESS,
            pass: process.env.HOST_EMAIL_PASSWORD
        },
        tls: { rejectUnauthorized: false },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 10000
    });

    // ← AWAIT the verification
    try {
        await transporter.verify();
        console.log('SMTP READY: Gmail connection verified');
    } catch (error) {
        console.error('SMTP CONNECTION FAILED:', error.message);
        throw error; // ← Let caller handle it
    }

    return transporter;
};

module.exports = createMailTransporter;
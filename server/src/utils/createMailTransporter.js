// const nodemailer = require('nodemailer')

// const createMailTransporter = () => {

//     const transporter = nodemailer.createTransport({
//         host: 'in-v3.mailjet.com',
//         port: 587,
//         secure: false,
//         auth: {
//             user: process.env.MAILJET_API_KEY,
//             pass: process.env.MAILJET_SECRET_KEY
//         }
//     });
//     return transporter
// }

// module.exports = createMailTransporter

const nodemailer = require('nodemailer');
console.log('createMailTransporter.js loaded');

const createMailTransporter = () => {
  console.log('Creating Gmail transporter (Port 587) for:', process.env.HOST_EMAIL_ADDRESS);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.HOST_EMAIL_ADDRESS,
      pass: process.env.HOST_EMAIL_PASSWORD // must be a Gmail App Password
    }
  });

  return transporter;
};

module.exports = createMailTransporter;

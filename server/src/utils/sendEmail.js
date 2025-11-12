const createMailTransporter = require('./createMailTransporter');

const getInContactEmail = (message) => {
  const transporter = createMailTransporter();

  const mailOptions = {
    from: `Contact Form <${process.env.BUSINESS_EMAIL_ADDRESS}>`,
    to: process.env.BUSINESS_EMAIL_ADDRESS,
    subject: `New Inquiry from ${message.name}`,
    html: `
      <p>Hello,</p>

      <p>You’ve received a new message via your website’s contact form.</p>

      <p>
        <strong>Name:</strong> ${message.name}<br>
        <strong>Email:</strong> ${message.email}<br>
        ${message.phoneNumber ? `<strong>Phone:</strong> ${message.phoneNumber}<br>` : ''}
        <strong>Message:</strong><br>
        ${message.message}
      </p>

      <p style="margin-top: 2em;">
        —<br>
        This message was sent on ${new Date(message.dateCreated).toLocaleString()}
      </p>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email sending failed:', error.message);
    } else {
      console.log('Email sent successfully:', info.response);
    }
  });
};

module.exports = { getInContactEmail };
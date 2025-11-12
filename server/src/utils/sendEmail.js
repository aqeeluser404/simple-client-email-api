const createMailTransporter = require('./createMailTransporter');

const getInContactEmail = async (message) => {
    console.log('Inside getInContactEmail. Message:', message);

  const transporter = await createMailTransporter();

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

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.response);
  } catch (error) {
    console.error('Email sending failed:', error.message);
    throw error;
  }
};

module.exports = { getInContactEmail };
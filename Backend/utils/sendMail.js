const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail', 
    auth: {
      user: 'rudhg35@gmail.com', 
      pass: 'jmdh lish fwft qmrn', 
    },
  });

  const mailOptions = {
    from: 'rudhg35@gmail.com',
    to,
    subject,
    text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };
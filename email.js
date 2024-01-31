// create a file named email-sender  
// npm install nodemailer (https://www.w3schools.com/nodejs/nodejs_email.asp)

// Try to send your self email using this
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'haiinsama@gmail.com',
    pass: 'password'
  }
});

var mailOptions = {
  from: 'haiinsama@gmail.com',
  to: 'myfriend@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'hey everynone!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
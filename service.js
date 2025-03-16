const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config({ path: path.resolve(__dirname, './.env.project1') });

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'host')));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'host'));

// Routes
const FILE = path.join(__dirname, 'host', 'home.ejs');
app.get('/', (req, res) => {
  res.render(FILE); // Render the contact form
});

app.get('/test', (req, res) => {
  res.send("test");
});

app.post('/send', async (req, res) => {
  const { name, email, message } = req.body;

  // Create a Nodemailer transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email options
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Message from ${name}`,
    text: message,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    res.send('Message sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending message.');
  }
});

// Export the app for Vercel
module.exports = app;

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const path = require('path')

dotenv.config(); 

const app = express();
const router = express.Router();
// Middleware
app.use(cors());
app.use(express.json());

// Define port
const PORT = process.env.PORT || 5000;

// Contact Route
var contactEmail = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
});
// Verify transporter setup
contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});


// Contact form route
router.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Construct email message
  const mail = {
    from: process.env.EMAIL_USER,
    to: email, // Change to your recipient email address
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${firstName} ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };

  // Send email
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.status(200).json({ message: "Message Sent" });
    }
  });
});

// Mount router
app.use("/", router);
// For local
app.use('/static', express.static(path.join(__dirname, './Frontend/build/static')));
// For vercel
// app.use('/static', express.static(path.join(__dirname, './Frontend/build/static')));
app.get('/test', (req, res) => {
  res.send('Server is working');
})
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: path.join(__dirname, './Frontend/build/')});
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const express = require("express");
// const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");

// const app = express();

// // Middleware to parse POST request data
// app.use(bodyParser.urlencoded({ extended: true }));

// // Serve HTML file
// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// // Handle form submission
// app.post("/submit-form", (req, res) => {
//   const { name, email, message } = req.body;

  
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: "your-email@gmail.com",
//       pass: "your-email-password",
//     },
//   });

//   const mailOptions = {
//     from: "your-email@gmail.com",
//     to: "your-email@gmail.com", 
//     subject: "New Contact Form Submission",
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   // Send email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       return res.status(500).send(error.toString());
//     }
//     res.send("Message sent: " + info.response);
//   });
// });

// // Start server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

// import express from "express";
// import cors from "cors";
// import path from "path";
// import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// import { fileURLToPath } from "url";
// import process from "process";

// dotenv.config();

// const app = express();

// // app.use(cors({
// //   origin: "http://localhost:3000"
// // }));
// app.use(cors({
//   origin: "http://localhost:5173",
//   methods: ["GET", "POST"],
//   credentials: true
// }));

// app.use(express.json());


// // ES module dirname support

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);



// app.get("/download-resume", (req, res) => {

//   const filePath = path.join(
//     __dirname,
//     "resume",
//     "Soumyashree_Nayak_Resume.pdf"
//   );

//   res.download(
//     filePath,
//     "Soumyashree_Nayak_Resume.pdf",
//     (error) => {

//       if (error) {

//         console.error("Download error:", error);

//         res.status(500).send("Error downloading file");

//       }

//     }
//   );

// });





// app.post("/api/contact/send-message", async (req, res) => {

//   try {

//     const { name, email, subject, message } = req.body;


//     const transporter = nodemailer.createTransport({

//       service: "gmail",

//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS
//       }

//     });


//     const mailOptions = {

//       from: email,

//       to: process.env.EMAIL_USER,

//       subject: subject,

//       html: `
//         <h2>New Portfolio Message</h2>

//         <p><strong>Name:</strong> ${name}</p>

//         <p><strong>Email:</strong> ${email}</p>

//         <p><strong>Message:</strong></p>

//         <p>${message}</p>
//       `

//     };


//     await transporter.sendMail(mailOptions);


//     res.status(200).json({

//       success: true,
//       message: "Message sent successfully"

//     });

//   } catch (error) {

//     console.error(error);

//     res.status(500).json({

//       success: false,
//       message: "Email sending failed"

//     });

//   }

// });





// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {

//   console.log(`Server running at http://localhost:${PORT}`);

// });

import express from "express";
import cors from "cors";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import fs from "fs";
import process from "process";

dotenv.config();

const app = express();


// ✅ Allow frontend access (Vite runs on 5173)

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());


// ✅ Fix __dirname for ES modules

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// =============================
// ✅ Resume Download Route
// =============================

app.get("/download-resume", (req, res) => {

  const filePath = path.join(
    __dirname,
    "resume",
    "Soumyashree_Nayak_Resume.pdf"
  );

  console.log("Resume path:", filePath);

  // check if file exists first

  if (!fs.existsSync(filePath)) {

    return res.status(404).send("Resume file not found");

  }

  res.download(filePath);

});


// =============================
// ✅ Contact Form Email Route
// =============================

app.post("/api/contact/send-message", async (req, res) => {

  try {

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {

      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });

    }


    const transporter = nodemailer.createTransport({

      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }

    });


    const mailOptions = {

      from: process.env.EMAIL_USER,

      replyTo: email,

      to: process.env.EMAIL_USER,

      subject: subject,

      html: `
        <h2>New Portfolio Message</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>

        <p>${message}</p>
      `

    };


    await transporter.sendMail(mailOptions);


    res.status(200).json({

      success: true,
      message: "Message sent successfully"

    });

  } catch (error) {

    console.error("Email error:", error);

    res.status(500).json({

      success: false,
      message: "Email sending failed"

    });

  }

});


// =============================
// ✅ Server Start
// =============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(`Server running at http://localhost:${PORT}`);

});
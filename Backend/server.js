import express from "express";
import cors from "cors";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// ES module dirname support
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/download-resume", (req, res) => {
  const filePath = path.join(
    __dirname,
    "resume",
    "Soumyashree_Nayak_Resume.pdf"
  );

  res.download(
    filePath,
    "Soumyashree_Nayak_Resume.pdf",
    (error) => {
      if (error) {
        console.error("Download error:", error);
        res.status(500).send("Error downloading file");
      }
    }
  );
});

app.post("/api/contact/send-message", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
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

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ message: "Failed to send message" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
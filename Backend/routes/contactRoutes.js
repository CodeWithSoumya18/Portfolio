import express from "express";
import { sendContactMail } from "../controller/contact.controller.js";

const router = express.Router();

router.post("/send-message", sendContactMail);

export default router;
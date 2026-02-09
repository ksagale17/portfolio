import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Resolve __dirname since we replaced it with ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure Nodemailer
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Verify Transporter
transporter.verify(function (error, success) {
  if (error) {
    console.log('Transporter error:', error);
  } else {
    console.log('Server is ready to take our messages');
  }
});

// Helper function to send email
const sendEmail = async (to, subject, htmlContent) => {
  try {
    const info = await transporter.sendMail({
      from: `"${process.env.FROM_NAME || 'Portfolio App'}" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html: htmlContent,
    });
    console.log('Message sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};

// Route: Request Investor Deck
app.post('/api/email/investor-deck', async (req, res) => {
  const { name, email, company, interest, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and Email are required' });
  }

  const subject = `New Investor Deck Request from ${name}`;
  const htmlContent = `
    <h2>Investor Deck Request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company || 'N/A'}</p>
    <p><strong>Interest:</strong> ${interest || 'N/A'}</p>
    <p><strong>Message:</strong></p>
    <p>${message || 'No message provided.'}</p>
  `;

  const result = await sendEmail(process.env.OWNER_EMAIL, subject, htmlContent);

  if (result.success) {
    res.status(200).json({ message: 'Request received successfully' });
  } else {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Route: Contact Form
app.post('/api/email/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const subject = `New Contact Message from ${name}`;
  const htmlContent = `
    <h2>New Contact Message</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
  `;

  const result = await sendEmail(process.env.OWNER_EMAIL, subject, htmlContent);

  if (result.success) {
    res.status(200).json({ message: 'Message sent successfully' });
  } else {
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.get('/', (req, res) => {
  res.send('Portfolio Backend API Running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

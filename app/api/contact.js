import express from 'express';
import { Router } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        
        user: 'itsramky234@gmail.com',
        pass: 'lgvkbadvxpqpojwe'
    },
    tls: {
        rejectUnauthorized: false
    },
    debug: true // Enable debug logs
});

// Updated verify function with detailed error logging
transporter.verify((error, success) => {
    if (error) {
        console.log('SMTP Connection Error:');
        console.log('Error Code:', error.code);
        console.log('Error Message:', error.message);
        console.log('Full Error:', error);
    } else {
        console.log('SMTP Connection Successful');
        console.log('Server is ready to take messages');
    }
});
app.post('/api/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    
    const mailOptions = {
        
        to: 'itsramky234@gmail.com', // Your email
        subject: `Portfolio Contact: ${subject}`,
        html: `
            Name: ${name}
            Email: ${email}
            Subject: ${subject}
            Message: ${message}
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
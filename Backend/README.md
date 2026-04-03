# Portfolio Backend

Backend service for Soumyashree's portfolio handling email notifications and file serving.

## Features

- ✅ Email sending via Nodemailer (Gmail)
- ✅ Resume download endpoint
- ✅ CORS enabled for frontend integration
- ✅ Error handling and validation
- ✅ Health check endpoint

## Installation

```bash
cd backend
npm install
```

## Environment Setup

1. Create a `.env` file in the backend folder:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_TO=8391soumyanayak@gmail.com
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### Gmail Configuration

To enable Gmail SMTP:
1. Go to [Google Account Settings](https://myaccount.google.com)
2. Enable 2-Factor Authentication
3. Generate an [App Password](https://myaccount.google.com/apppasswords)
4. Use the generated 16-character password as `EMAIL_PASSWORD`

## Running the Server

```bash
npm start
```

Server will run on `http://localhost:5000`

## API Endpoints

### 1. Health Check
```
GET /api/health
Response: { status: 'Backend is running!' }
```

### 2. Send Email
```
POST /api/send-email
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Interested in Discussion",
  "message": "I'd like to discuss a project..."
}

Response: {
  "success": true,
  "message": "Email sent successfully!",
  "messageId": "..."
}
```

### 3. Download Resume
```
GET /api/download-resume
Downloads: Soumyashree_Nayak_Resume.pdf
```

### 4. View Resume
```
GET /api/resume
Returns: PDF file for viewing in browser
```

## Frontend Integration

Update your frontend `.env`:
```
VITE_API_URL=http://localhost:5000
```

Update components to use:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Send email
await fetch(`${API_URL}/api/send-email`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name, email, subject, message })
});

// Download resume
window.location.href = `${API_URL}/api/download-resume`;
```

## Deployment

For Vercel or other serverless platforms, consider:
1. Using Vercel's serverless functions instead
2. Using managed email services (SendGrid, AWS SES)
3. Deploying separately on Railway, Render, or Heroku

## Troubleshooting

**Email not sending?**
- Verify Gmail App Password is correct
- Check 2FA is enabled on Gmail
- Verify `EMAIL_USER` and `EMAIL_TO` are correct

**CORS errors?**
- Update `cors` origin array in `server.js`
- Ensure frontend URL is whitelisted

**Resume download fails?**
- Verify file exists at `public/Soumyashree_Nayak_Resume.pdf`
- Check file permissions

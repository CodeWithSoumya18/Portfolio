# 🚀 Portfolio Fullstack Setup Guide

Your portfolio now has both frontend and backend working together!

## 📁 Project Structure

```
Portfolio/
├── src/                      (Frontend - React/Vite)
│   ├── components/
│   │   ├── Hero.jsx         (Updated: uses backend API)
│   │   ├── Contact.jsx      (Updated: uses backend API)
│   │   └── ...
│   └── ...
├── backend/                 (NEW - Backend Server)
│   ├── server.js           (Express server)
│   ├── package.json        (Backend dependencies)
│   ├── .env                (Configuration - CREATE THIS)
│   └── README.md           (Backend docs)
├── public/                  (Static files)
│   └── Soumyashree_Nayak_Resume.pdf
├── .env.local              (Updated: API URL added)
└── package.json            (Frontend dependencies)
```

## 🔧 Step 1: Setup Backend Environment

### Create `.env` file in `/backend` folder:

```bash
cd backend
```

Create a file named `.env` with this content:

```env
# Email Configuration for Gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_TO=8391soumyanayak@gmail.com

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL for CORS
FRONTEND_URL=http://localhost:5173
```

**Important:** Replace `your-email@gmail.com` with your Gmail address.

## 📧 Step 2: Get Gmail App Password

This allows the backend to send emails securely without exposing your Gmail password.

1. **Enable 2-Factor Authentication** (if not already enabled):
   - Go to [Google Account](https://myaccount.google.com)
   - Click "Security" in the left sidebar
   - Enable "2-Step Verification"

2. **Generate App Password**:
   - Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows Computer" (or your device)
   - Google will generate a 16-character password
   - Copy this password

3. **Set as EMAIL_PASSWORD** in `.env`:
   ```env
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
   ```

## 📦 Step 3: Install Backend Dependencies

```bash
cd backend
npm install
```

This will install:
- `express` - Web framework
- `cors` - Handle cross-origin requests
- `nodemailer` - Send emails via Gmail
- `dotenv` - Manage environment variables
- `body-parser` - Parse request bodies

## ▶️ Step 4: Run Backend Server

```bash
cd backend
npm start
```

You should see:
```
Backend server running on port 5000
Environment: development
```

## 🎨 Step 5: Run Frontend (in another terminal)

```bash
npm run dev
```

Frontend will run on `http://localhost:5173`
Backend will run on `http://localhost:5000`

## ✅ Step 6: Test Everything

### Test Backend Health:
```
GET http://localhost:5000/api/health
```

Should return:
```json
{ "status": "Backend is running!" }
```

### Test Resume Download:
- Click "Download Resume" button
- File should download from: `http://localhost:5000/api/download-resume`

### Test Email Sending:
- Fill the contact form
- Click "Send Message"
- Check your email at `8391soumyanayak@gmail.com`
- You should receive the message with sender details

## 🌍 Step 7: Frontend Configuration

Your `.env.local` already has:
```env
VITE_API_URL=http://localhost:5000
```

This tells frontend where to find the backend API.

## 📊 How It Works

### Hero Component (Resume Download)
**Before:** Direct anchor href to `/public/resume.pdf`
**After:** 
```
Click → Button calls handleDownloadResume()
     → Makes request to http://localhost:5000/api/download-resume
     → Backend streams file from /public/Soumyashree_Nayak_Resume.pdf
     → Browser downloads file
```

### Contact Component (Email)
**Before:** Used FormSubmit.co service (external, no control)
**After:**
```
Form Submit → handleSubmit() validates data
          → Fetch: POST /api/send-email
          → Backend receives form data
          → Nodemailer sends via Gmail SMTP
          → Email arrives at 8391soumyanayak@gmail.com
          → User sees success/error message
```

## 🐛 Troubleshooting

### "Cannot find module 'express'"
```bash
npm install
```

### "Email not sending"
- ✅ Verify 2FA is enabled on Gmail
- ✅ Verify App Password is correct (16 characters, spaces are OK)
- ✅ Verify EMAIL_USER matches your Gmail
- ✅ Check .env file is in `/backend` folder not root

### "CORS error in browser"
- Backend needs to be running
- Check FRONTEND_URL in .env matches your frontend URL
- For production, update URL in server.js cors config

### "Cannot GET /api/resume"
- Verify file exists: `Portfolio/public/Soumyashree_Nayak_Resume.pdf`
- Check file permissions
- Check file path is correct in server.js

## 🚀 Production Deployment

### Backend Deployment Options

1. **Vercel Serverless Functions** (Recommended)
   - Convert server.js to serverless functions
   - Environment variables set in Vercel dashboard

2. **Railway.app**
   - Simple Node.js hosting
   - $5-10/month

3. **Render.com**
   - Free tier available
   - Auto-deploys from GitHub

4. **Heroku**
   - Classic option
   - Full backend support

### Frontend Deployment

Update `.env` for production:
```env
VITE_API_URL=https://your-backend-url.com
```

Then deploy to Vercel as usual.

## 📝 Summary

✅ Backend created with Express
✅ Email sending via Gmail (Nodemailer)
✅ Resume serving from backend
✅ Frontend integrated with API calls
✅ Error handling and validation
✅ CORS configured
✅ Environment variables secured

**Your portfolio is now a true fullstack application!** 🎉

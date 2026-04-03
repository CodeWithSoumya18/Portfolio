# 🎉 Fullstack Portfolio Setup Complete!

Your portfolio is now a **complete fullstack application** with separate frontend and backend!

## 📊 What's New

### Backend Created ✅
- **Location:** `/backend` folder
- **Server:** Express.js running on port 5000
- **Email:** Nodemailer with Gmail SMTP
- **Status:** Tested and working!

### Frontend Updated ✅
- **Hero.jsx:** Now uses backend API for resume operations
- **Contact.jsx:** Now uses backend API for email sending
- **Configuration:** Added VITE_API_URL to .env

## 🚀 Quick Start (3 Steps)

### Step 1: Setup Gmail (One Time)
1. Go to https://myaccount.google.com
2. Enable 2-Factor Authentication (if not done)
3. Go to https://myaccount.google.com/apppasswords
4. Select "Mail" and "Windows Computer"
5. Copy the 16-character password

### Step 2: Configure Backend
Edit `/backend/.env` and replace:
```env
EMAIL_PASSWORD=<your-16-char-password>
```

### Step 3: Start Everything
**Option A - Automatic (Windows):**
```bash
start-dev.bat
```

**Option B - Manual (Any OS):**
```bash
# Terminal 1
cd backend
npm start

# Terminal 2 (new terminal)
npm run dev
```

Visit: http://localhost:5173

## 🎯 Project Structure

```
Portfolio/
├── backend/                   ← NEW Backend Server
│   ├── server.js              ← Express + Nodemailer
│   ├── package.json           ← Dependencies
│   ├── .env                   ← Configuration (SECRET!)
│   ├── .env.example           ← Template
│   ├── SETUP.md               ← Detailed setup guide
│   └── README.md              ← Backend API docs
│
├── src/                       ← Updated Frontend
│   └── components/
│       ├── Hero.jsx           ← Uses /api/download-resume
│       ├── Contact.jsx        ← Uses /api/send-email
│       └── ...
│
├── .env.local                 ← Updated with VITE_API_URL
├── FULLSTACK_SETUP.md         ← Complete deployment guide
├── start-dev.bat              ← Windows quick start
├── start-dev.sh               ← Unix quick start
└── ...
```

## 📡 How Data Flows

### Download Resume
```
User clicks "Download Resume"
        ↓
Frontend: handleDownloadResume()
        ↓
Fetch: GET http://localhost:5000/api/download-resume
        ↓
Backend: server.js reads file from /public/Soumyashree_Nayak_Resume.pdf
        ↓
Browser: Downloads file to user's computer
```

### Send Email
```
User submits contact form
        ↓
Frontend: handleSubmit() validates data
        ↓
Fetch: POST http://localhost:5000/api/send-email
Body: { name, email, subject, message }
        ↓
Backend: Nodemailer sends via Gmail SMTP
        ↓
Gmail: Delivers to 8391soumyanayak@gmail.com
        ↓
Frontend: Shows success/error message
```

## 🔧 API Endpoints

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/api/health` | GET | Check if backend is running |
| `/api/send-email` | POST | Send contact form email |
| `/api/download-resume` | GET | Download resume file |
| `/api/resume` | GET | View resume in browser |

### Example: Send Email
```bash
curl -X POST http://localhost:5000/api/send-email \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Interested in Discussion",
    "message": "Let'\''s work together..."
  }'
```

## ✨ Key Features

✅ **Email Sending**
- Use your actual Gmail account
- Secure app password (not your real password)
- Professional HTML-formatted emails
- Error handling & validation

✅ **Resume Download**
- Direct file serving from backend
- Proper headers for download
- Fast and reliable

✅ **Validation**
- Frontend validation (quick feedback)
- Backend validation (security)
- Error messages for users

✅ **CORS Configured**
- Frontend (port 5173) can talk to Backend (port 5000)
- Ready for production domains

## 🐛 Troubleshooting

### Backend won't start
```bash
# Check if port 5000 is in use
netstat -ano | findstr :5000

# Use different port
# Edit backend/.env: PORT=5001
```

### Email not sending
Checklist:
- [ ] 2FA enabled on Gmail
- [ ] App password is correct
- [ ] EMAIL_USER is your Gmail
- [ ] .env file is in /backend folder
- [ ] npm install ran in /backend

### CORS errors in browser
- Make sure backend is running on port 5000
- Check VITE_API_URL in .env.local

### Resume download not working
- Check file exists: `public/Soumyashree_Nayak_Resume.pdf`
- Check file permissions
- Look at backend console for errors

## 📦 Dependencies

**Backend:**
- `express` - Web server
- `cors` - Cross-origin requests
- `nodemailer` - Email sending
- `dotenv` - Environment variables
- `body-parser` - Request parsing

**Frontend:**
- Already has React, Framer Motion, Bootstrap, etc.

## 🚀 Next: Production Deployment

### Option 1: Keep Separate (Recommended)
- Deploy Frontend to Vercel (free)
- Deploy Backend to Railway.app (~$5/month)
- Update VITE_API_URL in Vercel environment

### Option 2: Backend as Serverless
- Convert to Vercel Serverless Functions
- Store credentials in Vercel environment
- No monthly cost

See `FULLSTACK_SETUP.md` for detailed deployment steps!

## 📚 Documentation Files

1. **FULLSTACK_SETUP.md** - Complete setup & deployment guide
2. **backend/SETUP.md** - Detailed Gmail configuration
3. **backend/README.md** - API documentation
4. **This file** - Quick reference

## ✅ Verification Checklist

- [ ] Backend folder created at `/backend`
- [ ] `.env` file created in `/backend` with Gmail password
- [ ] `npm install` ran in `/backend`
- [ ] Backend starts without errors: `npm start`
- [ ] Health check works: `http://localhost:5000/api/health`
- [ ] Frontend still runs: `npm run dev`
- [ ] Download Resume button works
- [ ] Contact form sends emails
- [ ] Both features show success messages

## 🎉 You're All Set!

Your portfolio now has:
✅ React + Vite frontend
✅ Express.js backend
✅ Professional email sending
✅ Resume file serving
✅ Production-ready architecture

**Questions?** Check the documentation files in `/backend` and root folder!

Happy coding! 🚀

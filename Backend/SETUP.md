# ⚙️ BACKEND SETUP - FOLLOW THESE STEPS

## Step 1: Create Gmail App Password

### Why? 
Gmail requires you to use an "App Password" instead of your regular password for security.

### How to Get It:

1. **Enable 2-Factor Authentication** (if not already enabled)
   - Go to https://myaccount.google.com
   - Click "Security" in left sidebar
   - Look for "2-Step Verification"
   - Follow steps to enable it
   - Come back here

2. **Generate App Password**
   - Go to https://myaccount.google.com/apppasswords
   - You'll see a dropdown: "Select the app and device you're using"
   - Select: "Mail" 
   - Select: "Windows Computer"
   - Click "Generate"
   - Google gives you a 16-character password: `xxxx xxxx xxxx xxxx`
   - **COPY THIS PASSWORD** 

3. **Don't share this password!** Keep it in `.env` file only (never commit to GitHub)

## Step 2: Create `.env` File

In the `/backend` folder, create a new file named `.env` with:

```env
# Your Gmail credentials
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=xxxx xxxx xxxx xxxx

# Where to send contact form emails
EMAIL_TO=8391soumyanayak@gmail.com

# Server port
PORT=5000

# Environment
NODE_ENV=development

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

**Replace:**
- `your-email@gmail.com` with your actual Gmail
- `xxxx xxxx xxxx xxxx` with the 16-char password you got from step 1

## Step 3: Test Backend

### Terminal 1: Start Backend
```bash
cd backend
npm start
```

You should see:
```
✅ Backend server running on port 5000
✅ Environment: development
```

### Terminal 2: Test Health Check
```bash
curl http://localhost:5000/api/health
```

Response:
```json
{ "status": "Backend is running!" }
```

### Terminal 3: Test Email (from project root)
```bash
curl -X POST http://localhost:5000/api/send-email ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Test User\",\"email\":\"test@example.com\",\"subject\":\"Test\",\"message\":\"Hello\"}"
```

You should get back:
```json
{
  "success": true,
  "message": "Email sent successfully!",
  "messageId": "..."
}
```

And check your email - you should receive the test message!

## Step 4: Run Frontend & Backend Together

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### Open in Browser:
- Frontend: http://localhost:5173
- API Health: http://localhost:5000/api/health

### Test Features:
1. **Download Resume** - Click button, file downloads from backend
2. **Send Message** - Fill form, click Send, email goes to your inbox
3. **View Resume** - Clicks "View Resume", opens PDF in new tab

## ✅ Done!

Your fullstack portfolio is now running locally with:
- ✅ React Frontend on port 5173
- ✅ Express Backend on port 5000  
- ✅ Email sending via Gmail
- ✅ Resume serving from backend

## 🐛 Issues?

### "Cannot find .env"
- Make sure `.env` is in `/backend` folder (not root)
- Make sure filename is exactly `.env` (no extension)

### "Email not sending"
Checklist:
- [ ] 2FA enabled on Gmail? (required)
- [ ] App Password is correct 16 characters?
- [ ] EMAIL_USER is your actual Gmail address?
- [ ] No extra spaces or typos in `.env`?
- [ ] Backend is running on port 5000?

### "CORS error"
- Make sure backend is running
- Make sure frontend URL is http://localhost:5173 (check in .env FRONTEND_URL)

### "Port 5000 already in use"
```bash
# Windows - find process using port 5000
netstat -ano | findstr :5000

# Then kill it (replace PID with the number)
taskkill /PID <PID> /F

# Or use different port in .env
PORT=5001
```

## 📚 Next Steps

Once working locally, deploy to production:
1. Backend to Railway.app or Render.com
2. Frontend to Vercel
3. Update VITE_API_URL in production environment

See FULLSTACK_SETUP.md for deployment options!

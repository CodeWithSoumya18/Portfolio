@echo off
REM Quick Start Script for Portfolio Development

echo.
echo ======================================
echo Portfolio Fullstack Development Setup
echo ======================================
echo.

REM Check if backend .env file exists
if not exist "backend\.env" (
    echo ERROR: backend\.env file not found!
    echo.
    echo Please create backend\.env file with your Gmail credentials
    echo See backend\SETUP.md for instructions
    pause
    exit /b 1
)

echo Starting Backend Server...
echo.
start "Backend - Portfolio" cmd /k "cd backend && npm start"

timeout /t 2 /nobreak

echo.
echo Starting Frontend Development Server...
echo.
start "Frontend - Portfolio" cmd /k "npm run dev"

echo.
echo ======================================
echo Servers Starting...
echo ======================================
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:5173
echo.
echo Both terminals will open - keep them running!
pause

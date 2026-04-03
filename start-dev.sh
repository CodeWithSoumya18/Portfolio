#!/bin/bash
# Quick Start Script for Portfolio Development on macOS/Linux

echo "======================================"
echo "Portfolio Fullstack Development Setup"
echo "======================================"
echo ""

# Check if backend .env file exists
if [ ! -f "backend/.env" ]; then
    echo "ERROR: backend/.env file not found!"
    echo ""
    echo "Please create backend/.env file with your Gmail credentials"
    echo "See backend/SETUP.md for instructions"
    exit 1
fi

# Start backend in new terminal
echo "Starting Backend Server..."
open -a Terminal backend

sleep 2

# Start frontend in new terminal  
echo "Starting Frontend Development Server..."
open -a Terminal .

echo ""
echo "======================================"
echo "Servers Starting..."
echo "======================================"
echo "Backend:  http://localhost:5000"
echo "Frontend: http://localhost:5173"
echo ""
echo "Both terminals will open - keep them running!"

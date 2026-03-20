# Deployment Configuration for Render

This document provides quick reference for deploying the Question-Answering System.

## 🚀 Quick Deploy Commands

### 1. Initialize Git (First Time Only)
```bash
cd "C:\Users\varsh\OneDrive\DL SSA"
git init
git add .
git commit -m "Initial commit: QA System LLMs"
```

### 2. Connect to GitHub
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/qa-system-llms.git
git push -u origin main
```

### 3. Render Configuration

**Build Command:**
```
pip install -r requirements.txt
```

**Start Command:**
```
gunicorn app:app
```

**Environment Variables (Optional):**
```
FLASK_ENV=production
PORT=5000
```

## 📋 Render Settings Checklist

- ✅ Name: `qa-system-llms`
- ✅ Region: Choose closest to your location
- ✅ Branch: `main`
- ✅ Root Directory: [Leave blank]
- ✅ Runtime: `Python 3`
- ✅ Build Command: `pip install -r requirements.txt`
- ✅ Start Command: `gunicorn app:app`
- ✅ Instance Type: `Free`

## 🔗 Important URLs After Deployment

- **Live App**: `https://qa-system-llms.onrender.com`
- **Health Check**: `https://qa-system-llms.onrender.com/health`
- **API Endpoint**: `https://qa-system-llms.onrender.com/ask`

## ⚡ Update Deployment

Make changes locally, then:
```bash
git add .
git commit -m "Update description"
git push origin main
```

Render will auto-deploy within 1-2 minutes.

## 🐛 Troubleshooting Quick Fixes

**Build Failed?**
- Check logs in Render dashboard
- Verify all files committed
- Ensure requirements.txt is correct

**502 Error?**
- Wait 2-3 minutes (cold start on free tier)
- Check application logs
- Verify Procfile exists and is correct

**App Not Loading?**
- Open browser DevTools (F12)
- Check Console for errors
- Check Network tab for failed requests

## 📞 Support Links

- Render Docs: https://render.com/docs
- Render Community: https://community.render.com
- Project Issues: Your GitHub repository issues tab

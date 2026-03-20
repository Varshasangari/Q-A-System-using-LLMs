# Quick Start Guide - Question-Answering System using LLMs

## 🚀 3 Simple Steps to Run

### Option A: Double-click Method (Easiest)
1. **Double-click** `start.bat` file
2. Wait for browser to open automatically
3. **Done!** Start asking questions

---

### Option B: Command Prompt Method
```cmd
# Step 1: Open Command Prompt in project folder
# Step 2: Install dependencies (first time only)
pip install -r requirements.txt

# Step 3: Run the application
python app.py

# Step 4: Open browser to http://localhost:5000
```

---

## ⚡ Quick Commands

### Install Dependencies
```cmd
pip install flask
```

### Run Application
```cmd
python app.py
```

### Check if Running
Open browser → `http://localhost:5000`

### Stop Server
Press `Ctrl + C` in the terminal running the server

---

## 🎯 Try These Questions

Click any example chip or type these:

1. **What is deep learning?**
2. **Explain CNN in simple words**
3. **What is overfitting in machine learning?**
4. **Difference between supervised and unsupervised learning**
5. **What is backpropagation?**
6. **Explain transfer learning**

---

## 📱 Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Enter` | Submit question |
| `Shift + Enter` | New line in input box |
| `Ctrl + C` (on answer) | Copy to clipboard |

---

## 🎨 Features at a Glance

✅ **Ask anything** - Type natural language questions  
✅ **Instant answers** - AI generates responses in seconds  
✅ **Three-part format** - Quick answer, explanation, example  
✅ **Example chips** - Click pre-written questions  
✅ **Copy answers** - One-click copy to clipboard  
✅ **Clear button** - Reset everything instantly  
✅ **Beautiful design** - Galaxy-themed modern UI  
✅ **Mobile friendly** - Works on all devices  

---

## ❗ Common Issues & Quick Fixes

### Problem: "Flask not found"
**Fix**: 
```cmd
pip install flask
```

### Problem: Page won't load
**Check**:
1. Is server running? (Check terminal for errors)
2. Correct URL? → `http://localhost:5000`
3. Try different browser

### Problem: Port already in use
**Fix**: Change port in `app.py` line 225:
```python
app.run(debug=True, port=8080)  # Use 8080 instead
```

---

## 📁 Project Files Explained

| File | Purpose |
|------|---------|
| `app.py` | Main server (Python Flask) |
| `templates/index.html` | Webpage structure |
| `static/style.css` | Beautiful styling |
| `static/script.js` | Interactive features |
| `requirements.txt` | Dependencies list |
| `start.bat` | Quick-start script |
| `README.md` | Full documentation |
| `PROJECT_DOCS.md` | Detailed technical docs |

---

## 🎓 For Presentations

### Demo Flow (2-3 minutes)

1. **Show homepage** (5 sec)
   - Point out beautiful galaxy design
   
2. **Click example question** (10 sec)
   - Demonstrates auto-fill feature
   
3. **Submit and show loading** (10 sec)
   - Shows processing animation
   
4. **Display answer** (15 sec)
   - Highlight three-section format
   - Show typing animation
   
5. **Copy answer** (5 sec)
   - Click clipboard icon
   
6. **Show responsive** (15 sec)
   - Resize browser window
   
7. **Explain architecture** (30 sec)
   - Frontend → Backend → Mock LLM
   - Easy to add real API
   
8. **Show code** (optional, 30 sec)
   - Open `app.py`
   - Show where to add real LLM

---

## 💡 Pro Tips

1. **First time setup**: Run `start.bat` - it handles everything
2. **Testing**: Use example chips for guaranteed good answers
3. **Custom questions**: Keep them under 1000 characters
4. **Presentation**: Bookmark localhost:5000 for quick access
5. **Development**: Edit `app.py` to customize mock answers

---

## 🔧 Customization Ideas

### Change Colors
Edit `static/style.css` → Look for `:root` section

### Add New Q&A Pairs
Edit `app.py` → Add to `MOCK_KNOWLEDGE_BASE` dictionary

### Modify Layout
Edit `templates/index.html` → Rearrange sections

### Adjust Animations
Edit `static/style.css` → Find `@keyframes` rules

---

## 📊 Project Stats

- **Total Files**: 7 main files
- **Lines of Code**: ~1,900 lines
- **Features**: 10+ interactive features
- **Responsive**: Mobile, Tablet, Desktop
- **Browser Support**: All modern browsers

---

## ✅ Checklist Before Presentation

- [ ] Server running successfully
- [ ] Browser opens to correct URL
- [ ] Example questions work
- [ ] Answers display properly
- [ ] Copy function works
- [ ] Mobile view tested (resize browser)
- [ ] Terminal accessible for showing code
- [ ] Backup screenshots ready

---

## 🆘 Need Help?

1. **Check README.md** - Comprehensive guide
2. **Read PROJECT_DOCS.md** - Technical details
3. **Inspect browser console** - Press F12
4. **Verify server logs** - Check terminal output

---

## 🌟 Remember

- This is a **demonstration project** for educational purposes
- Uses **mock responses** (no real API key needed)
- **Ready to integrate** real LLM when you have API access
- Designed to be **presentation-ready** out of the box

---

**Happy Learning! 🚀**

*Built with ❤️ for AI & Deep Learning education*

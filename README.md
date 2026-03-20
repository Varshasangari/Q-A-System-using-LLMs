# Question-Answering System using LLMs

A modern, professional web application for AI-powered question answering using Large Language Models.

## 🚀 Quick Start

### Method 1: Using Command Prompt (Easiest)

1. **Open Command Prompt** in this project folder
2. **Install dependencies:**
   ```cmd
   pip install -r requirements.txt
   ```
3. **Run the application:**
   ```cmd
   python app.py
   ```
4. **Open your browser** and go to: `http://localhost:5000`

### Method 2: Step by Step

1. Install Flask:
   ```cmd
   pip install flask
   ```

2. Run the server:
   ```cmd
   python app.py
   ```

3. Access at: `http://localhost:5000`

## 📁 Project Structure

```
Question-Answering-System/
├── app.py                 # Flask backend server
├── requirements.txt       # Python dependencies
├── templates/
│   └── index.html        # Main HTML page
└── static/
    ├── style.css         # Modern galaxy-themed styling
    └── script.js         # Frontend interactions
```

## ✨ Features

- **🤖 AI-Powered Answers**: Intelligent responses using mock LLM integration
- **⚡ Real-time Processing**: Instant answer generation with loading states
- **💬 Example Questions**: Pre-built question chips for quick testing
- **📱 Fully Responsive**: Works on desktop, laptop, tablet, and mobile
- **🎨 Galaxy Design**: Deep blue cosmic theme with animated stars
- **🔄 Clear & Retry**: Easy form reset and error recovery
- **📋 Copy Answer**: One-click copy full response
- **💾 Recent History**: Saves last 10 questions in browser storage
- **⌨️ Keyboard Shortcuts**: Enter to submit, Shift+Enter for new line
- **🎯 Smart Validation**: Character count and input validation

## 🎯 How to Use

1. **Type a question** in the input box (or click an example chip)
2. **Click "Ask Question"** or press Enter
3. **Wait for the AI** to generate an answer (loading animation appears)
4. **View the answer** displayed in three sections:
   - Quick Answer (summary)
   - Detailed Explanation
   - Practical Example
5. **Copy the answer** using the clipboard button if needed

## 🔧 LLM Integration

The backend is designed for easy LLM API integration. To connect a real LLM:

1. Open `app.py`
2. Find the `generate_answer()` function
3. Replace the mock logic with your LLM API call
4. Follow the commented example for OpenAI integration

Currently uses intelligent keyword matching with predefined answers for demonstration.

## 🎨 Design Features

- **Deep Blue Galaxy Theme**: Professional cosmic aesthetic
- **Animated Background**: Twinkling star particles
- **Glassmorphism Cards**: Semi-transparent frosted glass effect
- **Gradient Text**: Beautiful color transitions
- **Smooth Animations**: Fade-in, slide-up effects
- **Hover Effects**: Interactive buttons and cards
- **Typing Animation**: Answers appear word-by-word
- **Toast Notifications**: Success/error messages

## 💡 Sample Questions to Try

- What is deep learning?
- Explain CNN in simple words
- What is overfitting in machine learning?
- Difference between supervised and unsupervised learning
- What is backpropagation?
- Explain transfer learning
- What is natural language processing?
- How do neural networks work?

## 🛠️ Technical Stack

**Backend:**
- Python Flask
- RESTful API design
- Mock LLM response system

**Frontend:**
- HTML5, CSS3, JavaScript (ES6+)
- Modern CSS features (Grid, Flexbox, Variables)
- Async/Await for API calls
- LocalStorage for history

**Design:**
- Google Fonts (Inter, Poppins)
- Custom galaxy-inspired color palette
- Responsive breakpoints
- Smooth CSS animations

## 🎓 About This Project

This is a college-level AI/Deep Learning project demonstrating:

- Natural Language Processing concepts
- Full-stack web development
- Modern UI/UX design
- API integration patterns
- Client-server architecture
- Responsive web design

Perfect for:
- Mini projects
- Final year showcase
- AI/Deep Learning demos
- Portfolio presentations

## 🔮 Future Enhancements

Potential additions to extend this project:

- [ ] Real LLM API integration (OpenAI, Anthropic, etc.)
- [ ] Dark/Light mode toggle
- [ ] Multiple language support
- [ ] Voice input capability
- [ ] Answer export as PDF
- [ ] User authentication
- [ ] Question categories
- [ ] Answer rating system
- [ ] Chat history with search
- [ ] Advanced text formatting (Markdown, LaTeX)

## ⚙️ Configuration

### Change Port
Edit `app.py`:
```python
app.run(debug=True, host='0.0.0.0', port=8080)
```

### Enable Debug Mode
Already enabled by default. Set `debug=False` for production.

### Customize Mock Answers
Edit the `MOCK_KNOWLEDGE_BASE` dictionary in `app.py`.

## 🐛 Troubleshooting

**Issue: Flask not installed**
```cmd
pip install flask
```

**Issue: Port already in use**
```cmd
# Kill process on port 5000 or change port in app.py
```

**Issue: Page not loading**
- Check if server is running
- Verify URL: http://localhost:5000
- Clear browser cache
- Check browser console for errors

## 📝 API Endpoints

### GET `/`
Serves the main webpage

### POST `/ask`
**Request:**
```json
{
  "question": "What is deep learning?"
}
```

**Response:**
```json
{
  "success": true,
  "answer": {
    "short_answer": "...",
    "explanation": "...",
    "example": "..."
  },
  "question": "What is deep learning?"
}
```

### GET `/health`
Health check endpoint

## 🎯 Presentation Tips

When demonstrating this project:

1. Start the server and show the beautiful homepage
2. Click an example question chip to auto-fill
3. Show the loading animation when submitting
4. Highlight the three-section answer format
5. Demonstrate the copy-to-clipboard feature
6. Show responsive design by resizing browser
7. Mention the galaxy-inspired design choices
8. Explain how real LLM can be integrated
9. Discuss the educational value and concepts

## 📄 License

Educational purpose only. Free to use for learning and academic projects.

## 👨‍💻 Author

Built as an AI & Deep Learning project demonstration.

---

**Enjoy building and learning! 🚀**

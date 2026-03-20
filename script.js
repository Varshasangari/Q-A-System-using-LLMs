/**
 * Question-Answering System using LLMs
 * Frontend JavaScript - Handles user interactions and API communication
 */

// DOM Elements
const questionInput = document.getElementById('questionInput');
const askBtn = document.getElementById('askBtn');
const clearBtn = document.getElementById('clearBtn');
const answerCard = document.getElementById('answerCard');
const errorCard = document.getElementById('errorCard');
const shortAnswerEl = document.getElementById('shortAnswer');
const detailedExplanationEl = document.getElementById('detailedExplanation');
const exampleTextEl = document.getElementById('exampleText');
const errorTextEl = document.getElementById('errorText');
const copyBtn = document.getElementById('copyBtn');
const retryBtn = document.getElementById('retryBtn');
const charCountEl = document.getElementById('charCount');
const toast = document.getElementById('toast');

// Example chips
const exampleChips = document.querySelectorAll('.chip');

// State
let isProcessing = false;
let recentQuestions = JSON.parse(localStorage.getItem('recentQuestions') || '[]');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializeEventListeners();
    loadRecentQuestions();
});

/**
 * Initialize all event listeners
 */
function initializeEventListeners() {
    // Ask button click
    askBtn.addEventListener('click', handleAskQuestion);
    
    // Clear button click
    clearBtn.addEventListener('click', handleClear);
    
    // Copy button click
    copyBtn.addEventListener('click', handleCopyAnswer);
    
    // Retry button click
    retryBtn.addEventListener('click', handleRetry);
    
    // Character count
    questionInput.addEventListener('input', updateCharCount);
    
    // Enter key to submit (Shift+Enter for new line)
    questionInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            if (!isProcessing) {
                handleAskQuestion();
            }
        }
    });
    
    // Example chips
    exampleChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const question = chip.getAttribute('data-question');
            questionInput.value = question;
            updateCharCount();
            questionInput.focus();
        });
    });
}

/**
 * Update character count display
 */
function updateCharCount() {
    const currentLength = questionInput.value.length;
    charCountEl.textContent = currentLength;
    
    if (currentLength > 900) {
        charCountEl.style.color = '#ef4444';
    } else if (currentLength > 700) {
        charCountEl.style.color = '#f59e0b';
    } else {
        charCountEl.style.color = '#94a3b8';
    }
}

/**
 * Handle ask question action
 */
async function handleAskQuestion() {
    const question = questionInput.value.trim();
    
    // Validation
    if (!question) {
        showError('Please enter a question.');
        return;
    }
    
    if (question.length > 1000) {
        showError('Question is too long. Maximum 1000 characters allowed.');
        return;
    }
    
    // Prevent multiple simultaneous requests
    if (isProcessing) {
        return;
    }
    
    // Set processing state
    setIsProcessing(true);
    hideError();
    hideAnswer();
    
    try {
        // Send request to backend
        const response = await fetch('/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question }),
        });
        
        const data = await response.json();
        
        if (response.ok && data.success) {
            // Display answer
            displayAnswer(data.answer, data.question);
            
            // Save to recent questions
            saveRecentQuestion(data.question);
            
            showToast('Answer generated successfully!', 'success');
        } else {
            // Handle API error
            showError(data.error || 'Failed to get answer. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        showError('Network error. Please check your connection and try again.');
    } finally {
        setIsProcessing(false);
    }
}

/**
 * Display answer in the answer card
 */
function displayAnswer(answer, question) {
    // Animate text appearance
    shortAnswerEl.innerHTML = '';
    detailedExplanationEl.innerHTML = '';
    exampleTextEl.innerHTML = '';
    
    // Type out the answers with animation
    typeOutText(shortAnswerEl, answer.short_answer || 'No answer available.');
    setTimeout(() => {
        typeOutText(detailedExplanationEl, answer.explanation || 'No explanation available.');
    }, 300);
    setTimeout(() => {
        typeOutText(exampleTextEl, answer.example || 'No example available.');
    }, 600);
    
    // Show the card
    answerCard.style.display = 'block';
    setTimeout(() => {
        answerCard.classList.add('fade-in-up');
    }, 10);
    
    // Scroll to answer
    setTimeout(() => {
        answerCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

/**
 * Type out text with animation effect
 */
function typeOutText(element, text) {
    const words = text.split(' ');
    let currentIndex = 0;
    
    element.innerHTML = '';
    
    function addNextWord() {
        if (currentIndex < words.length) {
            element.innerHTML += words[currentIndex] + ' ';
            currentIndex++;
            setTimeout(addNextWord, 30); // Adjust speed here
        }
    }
    
    addNextWord();
}

/**
 * Show error message
 */
function showError(message) {
    errorTextEl.textContent = message;
    errorCard.style.display = 'block';
    setTimeout(() => {
        errorCard.classList.add('fade-in-up');
    }, 10);
    
    // Scroll to error
    setTimeout(() => {
        errorCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

/**
 * Hide error message
 */
function hideError() {
    errorCard.style.display = 'none';
    errorCard.classList.remove('fade-in-up');
}

/**
 * Hide answer card
 */
function hideAnswer() {
    answerCard.style.display = 'none';
    answerCard.classList.remove('fade-in-up');
}

/**
 * Set processing state
 */
function setIsProcessing(processing) {
    isProcessing = processing;
    
    if (processing) {
        askBtn.disabled = true;
        askBtn.querySelector('.btn-text').style.display = 'none';
        askBtn.querySelector('.btn-loader').style.display = 'flex';
        questionInput.disabled = true;
    } else {
        askBtn.disabled = false;
        askBtn.querySelector('.btn-text').style.display = 'inline';
        askBtn.querySelector('.btn-loader').style.display = 'none';
        questionInput.disabled = false;
        questionInput.focus();
    }
}

/**
 * Handle clear action
 */
function handleClear() {
    questionInput.value = '';
    updateCharCount();
    hideAnswer();
    hideError();
    questionInput.focus();
    showToast('Cleared successfully!', 'success');
}

/**
 * Handle copy answer action
 */
function handleCopyAnswer() {
    const shortAnswer = shortAnswerEl.textContent;
    const detailedExplanation = detailedExplanationEl.textContent;
    const example = exampleTextEl.textContent;
    
    const fullText = `Question: ${questionInput.value}\n\n` +
                     `Quick Answer:\n${shortAnswer}\n\n` +
                     `Detailed Explanation:\n${detailedExplanation}\n\n` +
                     `Example:\n${example}`;
    
    navigator.clipboard.writeText(fullText).then(() => {
        showToast('Answer copied to clipboard!', 'success');
    }).catch(err => {
        console.error('Failed to copy:', err);
        showError('Failed to copy to clipboard.');
    });
}

/**
 * Handle retry action
 */
function handleRetry() {
    hideError();
    handleAskQuestion();
}

/**
 * Save question to recent questions in localStorage
 */
function saveRecentQuestion(question) {
    // Add to beginning of array
    recentQuestions.unshift({
        question: question,
        timestamp: Date.now()
    });
    
    // Keep only last 10 questions
    recentQuestions = recentQuestions.slice(0, 10);
    
    // Save to localStorage
    localStorage.setItem('recentQuestions', JSON.stringify(recentQuestions));
}

/**
 * Load recent questions from localStorage
 */
function loadRecentQuestions() {
    // This could be extended to show recent questions in the UI
    // For now, we just keep them in storage for potential future use
    console.log('Recent questions loaded:', recentQuestions);
}

/**
 * Show toast notification
 */
function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = 'toast';
    
    if (type === 'success') {
        toast.classList.add('success');
    } else if (type === 'error') {
        toast.classList.add('error');
    }
    
    toast.classList.add('show');
    
    // Auto-hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

/**
 * Utility: Format text with basic markdown-like support
 */
function formatText(text) {
    if (!text) return '';
    
    // Convert line breaks to <br>
    text = text.replace(/\n/g, '<br>');
    
    // Bold text **like this**
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Italic text *like this*
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    return text;
}

// Make these functions available globally for debugging if needed
window.qaSystem = {
    ask: handleAskQuestion,
    clear: handleClear,
    copy: handleCopyAnswer
};

console.log('✅ Question-Answering System initialized');
console.log('💡 Tip: Press Enter to submit, Shift+Enter for new line');

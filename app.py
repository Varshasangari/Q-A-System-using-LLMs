"""
Question-Answering System using LLMs
Flask Backend Server
"""

from flask import Flask, render_template, request, jsonify
import re
import time

app = Flask(__name__)

# Mock knowledge base for demonstration purposes
# This simulates LLM responses when no API key is available
MOCK_KNOWLEDGE_BASE = {
    'deep learning': {
        'short_answer': 'Deep learning is a subset of machine learning that uses multi-layer neural networks to learn complex patterns from data.',
        'explanation': 'Deep learning models, inspired by the structure of the human brain, automatically learn hierarchical representations of data. They excel at tasks like image recognition, natural language processing, and speech recognition.',
        'example': 'For instance, deep learning powers facial recognition in photos, voice assistants like Siri and Alexa, and recommendation systems on Netflix.'
    },
    'cnn': {
        'short_answer': 'CNN (Convolutional Neural Network) is a specialized type of neural network designed primarily for processing structured grid data like images.',
        'explanation': 'CNNs use convolutional layers that apply filters to detect features like edges, textures, and shapes. They automatically learn spatial hierarchies of features through backpropagation.',
        'example': 'CNNs are used in medical imaging to detect tumors, in self-driving cars to recognize traffic signs, and in social media for automatic photo tagging.'
    },
    'overfitting': {
        'short_answer': 'Overfitting occurs when a machine learning model learns training data too well, including noise and random fluctuations, leading to poor performance on new data.',
        'explanation': 'An overfitted model has high accuracy on training data but fails to generalize to unseen data. It\'s like memorizing answers instead of understanding concepts.',
        'example': 'Imagine a student who memorizes practice questions but fails the actual exam because they didn\'t understand the underlying concepts.'
    },
    'supervised learning': {
        'short_answer': 'Supervised learning is a type of machine learning where models are trained on labeled data with input-output pairs.',
        'explanation': 'The algorithm learns to map inputs to correct outputs by minimizing prediction errors during training. Common algorithms include linear regression, decision trees, and neural networks.',
        'example': 'Email spam detection is supervised learning - the model learns from emails already labeled as "spam" or "not spam".'
    },
    'unsupervised learning': {
        'short_answer': 'Unsupervised learning is machine learning on unlabeled data, where the algorithm finds hidden patterns and structures without predefined outputs.',
        'explanation': 'Unlike supervised learning, there are no correct answers provided. The algorithm discovers patterns, groupings, or relationships in the data on its own.',
        'example': 'Customer segmentation in marketing - grouping customers by purchasing behavior without knowing the groups beforehand.'
    },
    'nlp': {
        'short_answer': 'Natural Language Processing (NLP) is a branch of AI that enables computers to understand, interpret, and generate human language.',
        'explanation': 'NLP combines computational linguistics with machine learning to bridge the gap between human communication and computer understanding.',
        'example': 'Google Translate, chatbots, sentiment analysis on social media, and autocorrect features all use NLP.'
    },
    'backpropagation': {
        'short_answer': 'Backpropagation is the fundamental algorithm used to train neural networks by calculating gradients and updating weights.',
        'explanation': 'It works by propagating errors backward through the network, computing how much each weight contributed to the error, and adjusting weights to minimize loss.',
        'example': 'Think of it like tuning a guitar - you adjust each string (weight) based on how out of tune (error) it sounds.'
    },
    'transfer learning': {
        'short_answer': 'Transfer learning is a technique where knowledge gained from solving one problem is applied to a different but related problem.',
        'explanation': 'Instead of training from scratch, you start with a pre-trained model and fine-tune it for your specific task, saving time and computational resources.',
        'example': 'Using a model trained on millions of general images and fine-tuning it to detect specific diseases in medical X-rays.'
    },
    'machine learning': {
        'short_answer': 'Machine Learning is a subset of artificial intelligence that enables systems to learn and improve from experience without being explicitly programmed.',
        'explanation': 'ML algorithms build mathematical models based on sample data (training data) to make predictions or decisions. It focuses on developing computer programs that can access data and learn from it.',
        'example': 'Netflix recommendations, fraud detection in banking, and personalized shopping suggestions on Amazon.'
    },
    'neural network': {
        'short_answer': 'A neural network is a computing system inspired by biological neural networks in the human brain, consisting of interconnected nodes (neurons).',
        'explanation': 'These networks learn to perform tasks by considering examples, generally without task-specific programming. Each connection learns to weight inputs based on their importance.',
        'example': 'Neural networks power Google Search autocomplete, handwriting recognition, and stock market prediction systems.'
    }
}

def generate_answer(question):
    """
    Generate answer for the given question.
    
    This function is designed to be easily replaced with real LLM API integration.
    Currently uses mock responses for demonstration.
    
    To integrate a real LLM API:
    1. Add your API client library (e.g., openai, anthropic, etc.)
    2. Replace the mock logic with actual API call
    3. Parse and return the response in the same format
    
    Args:
        question (str): User's question
        
    Returns:
        dict: Dictionary containing short_answer, explanation, and example
    """
    
    # === PLACEHOLDER FOR REAL LLM API INTEGRATION ===
    # Example for OpenAI integration:
    # 
    # import openai
    # openai.api_key = "your-api-key"
    # 
    # response = openai.ChatCompletion.create(
    #     model="gpt-3.5-turbo",
    #     messages=[
    #         {"role": "system", "content": "You are a helpful AI assistant that explains concepts clearly to students."},
    #         {"role": "user", "content": question}
    #     ]
    # )
    # answer = response.choices[0].message.content
    # 
    # return {
    #     "short_answer": answer[:200] + "...",
    #     "explanation": answer,
    #     "example": "See detailed explanation above."
    # }
    # =================================================
    
    # Mock response mode - simulate intelligent matching
    question_lower = question.lower().strip()
    
    # Check for keyword matches in our knowledge base
    best_match = None
    best_score = 0
    
    for keyword, answer_data in MOCK_KNOWLEDGE_BASE.items():
        # Calculate simple relevance score
        score = 0
        if keyword in question_lower:
            score += 3
        # Check for individual words
        for word in keyword.split():
            if word in question_lower:
                score += 1
        
        if score > best_score:
            best_score = score
            best_match = answer_data
    
    # Return matched answer or generic response
    if best_match and best_score >= 2:
        return best_match
    else:
        # Generic educational response for unmatched questions
        return {
            'short_answer': f'This is an interesting question about "{question[:50]}..."',
            'explanation': 'In the context of deep learning and artificial intelligence, this topic relates to how machines learn from data and make intelligent decisions. The field continues to evolve rapidly with new research and applications emerging regularly.',
            'example': 'Consider how similar principles apply in real-world AI systems like virtual assistants, recommendation engines, and automated decision-making tools.'
        }


@app.route('/')
def index():
    """Serve the main webpage"""
    return render_template('index.html')


@app.route('/ask', methods=['POST'])
def ask():
    """
    Handle question submission and return AI-generated answer
    
    Expected JSON input:
    {
        "question": "What is deep learning?"
    }
    
    Returns JSON:
    {
        "success": true,
        "answer": {
            "short_answer": "...",
            "explanation": "...",
            "example": "..."
        }
    }
    """
    try:
        data = request.get_json()
        
        # Validate input
        if not data or 'question' not in data:
            return jsonify({
                'success': False,
                'error': 'No question provided'
            }), 400
        
        question = data['question'].strip()
        
        if not question:
            return jsonify({
                'success': False,
                'error': 'Please enter a question'
            }), 400
        
        if len(question) > 1000:
            return jsonify({
                'success': False,
                'error': 'Question is too long (max 1000 characters)'
            }), 400
        
        # Simulate processing delay for realistic UX
        time.sleep(0.8)
        
        # Generate answer
        answer = generate_answer(question)
        
        return jsonify({
            'success': True,
            'answer': answer,
            'question': question
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': f'Server error: {str(e)}'
        }), 500


@app.route('/health')
def health():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'service': 'QA System API'})


if __name__ == '__main__':
    import os
    
    # Get port from environment variable (Render sets this)
    port = int(os.environ.get('PORT', 5000))
    
    # Debug mode OFF for production, ON for local development
    debug_mode = os.environ.get('FLASK_ENV', 'production') != 'production'
    
    print("=" * 60)
    print("🚀 Question-Answering System using LLMs")
    print("=" * 60)
    print("Starting server...")
    print(f"Access the application at: http://localhost:{port}")
    print("Press Ctrl+C to stop the server")
    print("=" * 60)
    app.run(debug=debug_mode, host='0.0.0.0', port=port)

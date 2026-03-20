@echo off
echo ============================================================
echo Question-Answering System using LLMs
echo ============================================================
echo.
echo Starting the application...
echo.

REM Check if Flask is installed
python -c "import flask" 2>nul
if errorlevel 1 (
    echo Installing dependencies...
    pip install -r requirements.txt
    echo.
)

REM Run the application
echo Launching server...
echo Access the application at: http://localhost:5000
echo Press Ctrl+C to stop the server
echo ============================================================
echo.
python app.py

pause

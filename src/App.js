import React, { useState } from 'react';
import './App.css';
import LoveWebsite from './components/LoveWebsite';
import Quiz from './components/Quiz';


function App() {
    const [showQuiz, setShowQuiz] = useState(false);

    const handleStartQuiz = () => {
        setShowQuiz(true);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to Raz</h1>
            </header>
            <LoveWebsite />
            <div>
                {!showQuiz ? (
                    <button onClick={handleStartQuiz}>Start Quiz</button>
                ) : (
                    <Quiz />
                )}
            </div>
        </div>
    );
}

export default App;
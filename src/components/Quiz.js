// src/components/Quiz.js
import React, { useState } from 'react';

const Quiz = () => {
    const questions = [
        {
            question: 'What is Ryan\'s favorite color?',
            options: ['Red', 'Blue', 'Green', 'Purple'],
            answer: 'Red'
        },
        {
            question: 'Where did you first meet?',
            options: ['School', 'Work', 'Party', 'Online'],
            answer: 'Work'
        },
        {
            question: 'What is Ryan\'s favorite physical thing about you?',
            options: ['Eyes', 'Butt', 'Smile', 'Legs'],
            answer: 'Butt'
        },
        {
            question: 'What is Ryan\'s favorite non physical thing about you?',
            options: ['Your Money', 'Your Location', 'Your Kindness', 'Your Confidence'],
            answer: 'Your Kindness'
        },
        {
            question: 'What is Ryan\'s favorite thing to eat?',
            options: ['Pizza', 'Chicken', 'Curry', 'You!'],
            answer: 'Chicken'
        },
        // Add more questions here
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (selectedOption) => {
        if (selectedOption === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="quiz">
            {showScore ? (
                <div className="score-section">
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <div>
                    <div className="question-section">
                        <div className="question-count">
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className="question-text">{questions[currentQuestion].question}</div>
                    </div>
                    <div className="answer-section">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswerOptionClick(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;

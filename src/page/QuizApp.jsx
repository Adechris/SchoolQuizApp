import React, { useState, useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { questions } from "./Data";

const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill("")
  );
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [timer, setTimer] = useState(1800); // 30 minutes timer
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [matric, setMatric] = useState('');


  useEffect(() => {
    // Retrieve user data from localStorage
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
      // Extract user's name
      const { firstName, lastName, classValue } = userData;
      setUserName(`${firstName} ${lastName}`);
      setMatric(`${classValue}`)
    }
  }, []);

  useEffect(() => {
    if (timer > 0 && !quizSubmitted) {
      const countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(countdown);
    } else if (timer === 0 && !quizSubmitted) {
      submitQuiz();
    }
  }, [timer, quizSubmitted]);

  const handleOptionSelect = (option) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestion] = option;
    setSelectedOptions(newSelectedOptions);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      submitQuiz();
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevQuestion) => prevQuestion - 1);
    }
  };

  const submitQuiz = () => {
    let newScore = 0;
    for (let i = 0; i < questions.length; i++) {
      if (selectedOptions[i] === questions[i].correctAnswer) {
        newScore++;
      }
    }
    setQuizSubmitted(true);
    const percentage = ((newScore / questions.length) * 100).toFixed(2); // Calculate percentage
    const quizResult = {
      score: newScore,
      totalQuestions: questions.length,
      percentage,
    };
    localStorage.setItem("quizResult", JSON.stringify(quizResult)); // Save result in localStorage

    // Update flag indicating that the user has taken the quiz
    localStorage.setItem("quizTaken", JSON.stringify(true));

    navigate("/profile");
  };

  return (
    <Container>
      {quizSubmitted ? (
        <div>
          <div>
            <div>Quiz Submitted</div>
            <div>
              Your quiz has been submitted successfully. You can now check your
              results in the result page.
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="question">
          <div className='d-flex justify-content-end'>
              <h5 className="text-danger">
              Time Remaining: {Math.floor(timer / 60)}:
              {(timer % 60).toString().padStart(2, "0")}
            </h5> 
            </div>
       <h2>Welcome, {userName}</h2>
       <div className="mb-5 mt-5">
       <h6>Matric Number: {matric}</h6>
       </div>

            <h5>Question {currentQuestion + 1}</h5>
            <div>{questions[currentQuestion].question}</div>
            <Form>
              {questions[currentQuestion].options.map((option, index) => (
                <Form.Check
                  key={index}
                  type="radio"
                  className="m-5"
                  label={option}
                  name="options"
                  id={`option${index}`}
                  checked={selectedOptions[currentQuestion] === option}
                  onChange={() => handleOptionSelect(option)}
                />
              ))}
            </Form>
            <div className="">
                 <Button
              variant="secondary"
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            <Button variant="primary" onClick={handleNextQuestion} className="m-5">
              {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
            </Button>
        
            </div>
          
          </div>
        </div>
      )}
    </Container>
  );
};

export default QuizApp;



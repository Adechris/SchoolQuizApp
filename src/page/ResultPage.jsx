import React from 'react';
import { Container, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ResultPage = () => {
  const quizResult = JSON.parse(localStorage.getItem('quizResult'));
  const quizTaken = JSON.parse(localStorage.getItem('quizTaken'));

  return (
    <Container className="question text-center ">
      <h2>Quiz Result</h2>
      {quizTaken ? (
        quizResult ? (
          <div className='m-5'>
            <p><strong>Score:</strong> {quizResult.score}</p>
            <p><strong>Total Questions:</strong> {quizResult.totalQuestions}</p>
            <p><strong>Percentage:</strong> {quizResult.percentage}%</p>
            <Link to="/profile">
              <Button variant="primary">Back to my Profile</Button>
            </Link>
          </div>
        ) : (
          <p>No quiz result found. Please take the quiz to view your result.</p>
        )
      ) : (
        <p>No quiz result found. Please take the quiz to view your result.</p>
      )}

      
    </Container>
  );
};

export default ResultPage;



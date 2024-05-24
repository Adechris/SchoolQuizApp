import React from 'react';
import ReportCard from './ReportCard';
import { Container } from 'react-bootstrap';

const ReportCardPage = () => {
  // Retrieve userData and quizResult from localStorage
  const userData = JSON.parse(localStorage.getItem('userData'));
  const quizResult = JSON.parse(localStorage.getItem('quizResult'));

  return (
    <Container className="question">
      <h2 className='text-center'>Report Card</h2>
      <ReportCard quizResult={quizResult} userData={userData} />
    </Container>
  );
};

export default ReportCardPage;

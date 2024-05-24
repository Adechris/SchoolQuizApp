import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { questions } from './Data';
import { Link } from 'react-router-dom';
const ReportCard = ({ quizResult, userData }) => {

    
  if (!quizResult) {
    return <div className='text-center'> No quiz result found for this candidate. Please take the quiz first before checking the report card.</div>;
  }

  // Calculate total questions and percentage
  const totalQuestions = questions.length;
  const percentage = ((quizResult.score / totalQuestions) * 100).toFixed(2);


  
  return (
    <Container>

    <Card>
      <Card.Body>
        {/* <Card.Title>Report Card</Card.Title> */}
        <Card.Text>
          <p><strong>Name:</strong> {userData.firstName} {userData.lastName}</p>
          <p><strong>Matric Number:</strong> {userData.classValue}</p>
          <p><strong>Total Score:</strong> {quizResult.score}/{totalQuestions}</p>
          <p><strong>Percentage:</strong> {percentage}%</p>
        </Card.Text>
        <hr />
        <Card.Text>
          <h5>Detailed Performance:</h5>
          {questions.map((question, index) => (
            <div key={index}>
              <p><strong>Question {index + 1}:</strong> {question.question}</p>
              {/* Check if answers array exists before accessing */}
              <p><strong>Your Answer:</strong> {quizResult.answers && quizResult.answers[index]}</p>
              <p><strong>Correct Answer:</strong> {question.correctAnswer}</p>
              {/* <p><strong>Result:</strong> {quizResult.answers && quizResult.answers[index] === question.correctAnswer ? 'Correct' : 'Incorrect'}</p> */}
              <hr />
            </div>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
        <div>
          <Link to="/profile" className='d-grid'>
            <button  className='btn btn-primary my-5'>Back to my Profile</button>
          </Link>
        </div>
  
    </Container>

  );
};

export default ReportCard;


// import React from 'react';
// import { Card, Container } from 'react-bootstrap';
// import { questions } from './Data';
// import { Link } from 'react-router-dom';

// const ReportCard = ({ quizResult, userData }) => {
//   if (!quizResult) {
//     return (
//       <Card>
//         <Card.Body>
//           <Card.Title>Report Card</Card.Title>
//           <Card.Text>
//             <p>No quiz result found. Please take the quiz first before checking the report card.</p>
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     );
//   }

//   // Calculate total questions and percentage
//   const totalQuestions = questions.length;
//   const percentage = ((quizResult.score / totalQuestions) * 100).toFixed(2);

//   return (
//     <Container>
//   <Card>
//       <Card.Body>
//         {/* <Card.Title>Report Card</Card.Title> */}
//         <Card.Text>
//           <p><strong>Name:</strong> {userData.firstName} {userData.lastName}</p>
//           <p><strong>Matric Number:</strong> {userData.classValue}</p>
//           <p><strong>Total Score:</strong> {quizResult.score}/{totalQuestions}</p>
//           <p><strong>Percentage:</strong> {percentage}%</p>
//         </Card.Text>
//         <hr />
//         <Card.Text>
//           <h5>Detailed Performance:</h5>
//           {questions.map((question, index) => (
//             <div key={index}>
//               <p><strong>Question {index + 1}:</strong> {question.question}</p>
//               {/* Check if answers array exists and the user's answer matches the correct answer */}
//               <p><strong>Your Answer:</strong> {quizResult.answers && quizResult.answers[index]}</p>
//               <p><strong>Correct Answer:</strong> {question.correctAnswer}</p>
//               <p><strong>Result:</strong> {quizResult.answers && quizResult.answers[index] === question.correctAnswer ? 'Correct' : 'Incorrect'}</p>
//               <hr />
//             </div>
//           ))}
//         </Card.Text>
//       </Card.Body>
//     </Card>
//       <div>
//      <Link to="/profile" className='d-grid'>
// <button  className='btn btn-primary my-5'>Back to my Profile</button>
// </Link>
//  </div>
//     </Container>
  
//   );
// };

// export default ReportCard;

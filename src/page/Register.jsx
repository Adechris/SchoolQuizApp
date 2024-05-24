import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [classValue, setClassValue] = useState('');
  const [image, setImage] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const userData = { firstName, lastName, classValue, image };
    localStorage.setItem('userData', JSON.stringify(userData));

    // Set flag indicating that the user has not taken the quiz yet
    localStorage.setItem('quizTaken', JSON.stringify(false));

    // Redirect to profile page
    // Replace the '/profile' with the actual path of the profile page
    if(firstName && lastName && classValue){
        window.location.href = '/profile';
    }
  };

  return (
    <Container className='question'>
      <h2>Register</h2>
      <div>
        <label>First Name</label>
        <input
          type="text"
          className='form-control shadow-none'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className='mt-2'>Last Name</label>
        <input
          type="text"
          className='form-control shadow-none'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label className='mt-2'>Matric</label>
        <input
          className='form-control shadow-none'
          value={classValue}
          onChange={(e) => setClassValue(e.target.value)}
          required
        />
          
      </div>
      <div>
      <label className='mt-2'>Student Image</label>
        <input
          type="file"
          accept='image/*'
          className='form-control shadow-none'
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <div>
        <button className="btn btn-primary mt-2" type="submit" onClick={handleRegister}>Register</button>
      </div>
    </Container>
  );
};

export default Register;





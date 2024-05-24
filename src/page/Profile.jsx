import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button, Container,Form } from 'react-bootstrap';

const Profile = () => {
  // Retrieve userData from localStorage
  const userData = JSON.parse(localStorage.getItem('userData'));
//    const quizResult = JSON.parse(localStorage.getItem("quizResult"));

  // State for controlling modal visibility and user data
  const [showModal, setShowModal] = useState(false);
  const [editedUserData, setEditedUserData] = useState(userData);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update user data in localStorage
    localStorage.setItem('userData', JSON.stringify(editedUserData));
    // Close modal
    setShowModal(false);
  };

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUserData({ ...editedUserData, [name]: value });
  };

  return (
    <Container className="question">
     <h2>Student Profile</h2>
     <div className='d-flex justify-content-end'>
     <button className='btn btn-success' onClick={() => setShowModal(true)}>Edit Student Profile</button>
     </div>
      <p><strong>First Name:</strong> {userData.firstName}</p>
      <p><strong>Last Name:</strong> {userData.lastName}</p>
      <p><strong>Matric Number:</strong> {userData.classValue}</p>
      <p><strong>Student Picture:</strong> <img src={userData.image} alt="student pic" /></p>


      <Link to="/quiz">
       <Button variant="primary">Take Quiz</Button>
       </Link>

       <Link to="/result">
         <Button variant="primary" className="mx-2">
           Check Result
         </Button>
       </Link>
       <Link to="/reportcard">
         <Button variant="primary" className="mx-2">
           Get Report Card
         </Button>
       </Link>


      {/* Modal for editing user details */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Student Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control 
                type="text" 
                name="firstName"
                value={editedUserData.firstName}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label className='mt-2'>Last Name</Form.Label>
              <Form.Control 
                type="text" 
                name="lastName"
                value={editedUserData.lastName}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group controlId="classValue">
              <Form.Label className='mt-2'>Matric Number</Form.Label>
              <Form.Control 
                type="text" 
                name="classValue"
                value={editedUserData.classValue}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="classValue">
              <Form.Label className='mt-2'>Student Image</Form.Label>
              <Form.Control 
                type="file" 
                name="image"
              accept='image/*'
      
              />
            </Form.Group>
            <Button variant="success" type="submit" className='mt-2'>
              Save Changes
            </Button>
            <Button variant="danger" onClick={()=>setShowModal(false)} type="submit" className='mt-2 mx-2'>
              Cancel
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Profile;

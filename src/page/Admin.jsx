import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from localStorage when component mounts
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []); // Empty dependency array ensures useEffect runs only once

  const deleteUser = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
  };

  return (
    <div>
    <div className='d-flex justify-content-center mt-5'>
      <p>Welcome to the Admin page</p>
     
      
    </div>
    <div>
      <Link className="btn btn-success d-flex justify-content-center" to="/register">Register to Continue </Link>

      </div>

    </div>
  );
};

export default Admin;

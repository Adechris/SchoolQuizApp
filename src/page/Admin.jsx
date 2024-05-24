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
      <h2>Registered Users</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <Link to={`/admin/profile/${index}`}>{user.firstName} {user.lastName}</Link>
            <button onClick={() => deleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;

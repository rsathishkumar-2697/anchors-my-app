import React from 'react';
import { Link } from 'react-router-dom';

function AccountCreated() {
  return (
    <div className="container">
      <h1>Account Created Successfully</h1>
      <Link to="/create_post">Create Your First Post</Link>
    </div>
  );
}

export default AccountCreated;

import React from 'react';
import { Link } from 'react-router-dom';

function CreateAccount() {
  return (
    <div className="container">
      <h1>Create Your Account</h1>
      <form>
        <input type="text" placeholder="Enter Your Name" />
        <input type="email" placeholder="Enter Email ID" />
        <Link to="/verify_email">Continue</Link>
      </form>
    </div>
  );
}

export default CreateAccount;

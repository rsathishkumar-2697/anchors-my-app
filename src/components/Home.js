import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container">
      <p>For Indian Users Only</p>
      <h1>Start posting anonymously where no one will judge.</h1>
      <h4>Welcome to the Stranger discussion forum</h4>
      <Link to="/create_account">Create Your Account</Link>
      <p>Already have an account? <Link to="/login">Login</Link></p>
    </div>
  );
}

export default Home;

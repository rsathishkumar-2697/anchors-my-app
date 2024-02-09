import React from 'react';
import { Link } from 'react-router-dom';

function VerifyEmail() {
  return (
    <div className="container">
      <h1>Verify Your Email</h1>
      <p>Please verify your email ID to continue. We have sent an OTP to this your-email@example.com</p>
      <form>
        <input type="text" placeholder="Enter OTP" />
        <Link to="/account_created">Continue</Link>
      </form>
    </div>
  );
}

export default VerifyEmail;

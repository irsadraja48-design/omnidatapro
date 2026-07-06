
import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>OmniData Pro - Login</h2>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Secure Login</button>
      </form>
    </div>
  );
};

export default Login;

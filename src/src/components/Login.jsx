import React from 'react';
import './Login.css';
import HoneyTrap from '../security/HoneyTrap'; // इसे यहाँ इम्पोर्ट किया

const Login = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>OmniData Pro - Login</h2>
        
        {/* सुरक्षा यहाँ जुड़ गई है */}
        <HoneyTrap />
        
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Secure Login</button>
      </form>
    </div>
  );
};

export default Login;

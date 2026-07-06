
import React, { useState } from 'react';
import HoneyTrap from './Security/HoneyTrap'; // 'Security' फोल्डर के अंदर से
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const trapField = document.getElementById('website')?.value;
    if (trapField !== "") {
      alert("Bot detected!");
      return;
    }
    alert("Login successful!");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>OmniData Pro</h2>
        <HoneyTrap />
        <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Secure Login</button>
      </form>
    </div>
  );
};
export default Login;

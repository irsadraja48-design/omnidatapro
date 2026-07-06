import React, { useState } from 'react';
import './Login.css';
import HoneyTrap from '../security/HoneyTrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    
    // हनीट्रैप चेक (अगर कोई बॉट इस फील्ड को भरेगा, तो सबमिट नहीं होगा)
    const trapField = document.getElementById('website').value;
    if (trapField !== "") {
      alert("स्पैम detected!");
      return;
    }

    // यहाँ अपना लॉगिन लॉजिक डालें
    console.log("Login Attempt:", { username, password });
    alert("लॉगिन प्रक्रिया शुरू हो रही है...");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>OmniData Pro - Login</h2>
        <HoneyTrap />
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Secure Login</button>
      </form>
    </div>
  );
};

export default Login;

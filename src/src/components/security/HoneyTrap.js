
// HoneyTrap.js
import React from 'react';

const HoneyTrap = () => {
  return (
    <div style={{ opacity: 0, position: 'absolute', top: -9999 }}>
      <label htmlFor="website">Leave this field empty:</label>
      <input type="text" id="website" name="website" tabIndex="-1" autoComplete="off" />
    </div>
  );
};

export default HoneyTrap;

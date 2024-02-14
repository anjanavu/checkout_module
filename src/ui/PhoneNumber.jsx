import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
const PhoneNumber = ({ phoneNumber, handlePhoneChange }) => {
    const [isFocused, setIsFocused] = useState(false);

  const inputStyle = {
    width: '100%',
    height: '3rem',
    fontSize: '1rem',
    borderRadius: '10px',
    border: `1px solid ${isFocused ? '#ebef29' : '#ccc'}`, // Dynamic border color based on focus
    transition: 'border-color 0.3s ease',
    outline: 'none', // Remove the default focus outline
  };
  return (
    <div style={{ width: '100%' }}>
      <PhoneInput
        country={'in'}
        value={phoneNumber}
        onChange={handlePhoneChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        inputProps={{
          style: inputStyle,
        }}
      />
    </div>
  )
}

export default PhoneNumber

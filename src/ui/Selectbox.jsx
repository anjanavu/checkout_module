import React, { useState, useEffect } from 'react';
const Selectbox = ({ options, value, onChange, label, ...props }) => {
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => {
      setSelectedValue(value);
    }, [value]);
  
    const handleSelectChange = (newValue) => {
      setSelectedValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    };
  
    const containerStyle = {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '10px'
    };
  
    const selectboxStyle = {
      padding: '8px',
      borderRadius: '10px',
      border: '1px solid #ccc',
      outline: 'none',
      width: '100%',
      height: '3.5rem',
      transition: 'border-color 0.3s ease', // Added transition for smooth effect
    };
  
    const focusedStyle = {
      borderColor: '#ebef29', // Change this to the desired color for the focused state
    };
  return (
    <div style={containerStyle} {...props}>
      <select
        style={{ ...selectboxStyle, ...(selectedValue && focusedStyle) }}
        value={selectedValue}
        onChange={(e) => handleSelectChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Selectbox

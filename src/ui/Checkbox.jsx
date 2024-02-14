import React, { useState, useEffect } from 'react';

const Checkbox = ({ label, checked, onChange, ...props }) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
      setIsChecked(checked);
    }, [checked]);
  
    const handleCheckboxChange = () => {
      const newValue = !isChecked;
      setIsChecked(newValue);
      if (onChange) {
        onChange(newValue);
      }
    };
  return (
    <div
    style={{
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      height: '3.5rem',
      padding: '8px',
      border: `2px solid ${isChecked ? '#ebef29' : '#ccc'}`,
      borderRadius: '6px',
      transition: 'border-color 0.3s, box-shadow 0.3s',
      boxShadow: isChecked ? '0 0 5px rgba(0, 0, 0, 0.3)' : 'none',
    }}
    {...props}
    onClick={handleCheckboxChange}
  >
    {isChecked && <div style={{ fontSize: '16px', lineHeight: '1', color: 'rgb(0, 0, 0)' }}>&#10003;</div>}
    {label && <label style={{ fontSize: '14px', marginLeft: '8px' }}>{label}</label>}
  </div>
  )
}

export default Checkbox

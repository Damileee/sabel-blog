import React, { useState } from 'react';

const Input = ({ label, type, className, placeholder }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState('');
  
    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = () => {
      if (inputValue === '') {
        setIsFocused(false);
      }
    };
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    return (
      <div className={`input-container ${isFocused || inputValue ? 'focused' : ''}`}>
        <input
          type={type}
          className={className}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleInputChange}
          placeholder={placeholder}
        />
        <label className="input-label">{label}</label>
      </div>
    );
  };  
export default Input;

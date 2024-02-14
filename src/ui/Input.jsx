import React, { useState, useEffect } from "react";
import styled, { css } from 'styled-components';

const InputContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 3.5rem;
  align-items: center;
  gap: 8px;
  border: 1px solid #ccc;
  background: var(--inner, #ffffff);
  border-radius: 10px;

  ${(props) => props.isFocused && css`
    border: 1px solid #EAEF29;
  `}
`;

const InputField = styled.input`
  color: #000000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  font-size: 14px;
  padding: 2px;
  width: 100%;
  min-width: 60px;
  font-style: normal;
  font-weight: 400;
  background: var(--inner, #ffffff);
  border: none;

  &::placeholder {
    color: #87898E;
  }

  &:focus {
    outline: none;
    border: none;
  }
`;

const IconContainer = styled.div`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
  padding-left: 8px;
  margin-right: 6px;
  align-items: center;
  flex-shrink: 0;
  color: #87898E;
`;

const SpecialAlign = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
`;
const Input = ({
    icon,
    placeholder,
    iconright,
    value,
    specialAlign,
    ...props
  }) => {
    const [inputValue, setInputValue] = useState("");
    const [isFocused, setIsFocused] = useState(false);
  
    useEffect(() => {
      setInputValue(value);
    }, [value]);
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleFocus = () => {
      setIsFocused(true);
    };
  
    const handleBlur = () => {
      setIsFocused(false);
    };
  
  return (
    <InputContainer isFocused={isFocused} {...props}>
      {icon && <IconContainer>{icon}</IconContainer>}
      <InputField
        autoComplete="off"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {iconright && <IconContainer>{iconright}</IconContainer>}
      {specialAlign && <SpecialAlign>{specialAlign}</SpecialAlign>}
    </InputContainer>
  )
}

export default Input

import React from "react";
import styled from "styled-components";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <StButton onClick={onClick}>{text}</StButton>;
};

const StButton = styled.button`
  width: 200px;
  height: 60px;
  border-radius: 8px;
  font-size: 20px;
  margin: 0 auto;
  cursor: pointer;
`;

export default Button;

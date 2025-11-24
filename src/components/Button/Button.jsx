import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ children, href = '#', onClick, ...props }) => {
  return (
    <StyledButton href={href} onClick={onClick} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
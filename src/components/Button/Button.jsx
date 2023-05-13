import React from 'react';
import { ButtonStyled } from './Button.styled';

const Button = ({ onClick, children, ...other }) => {
  return (
    <ButtonStyled onClick={onClick} {...other}>
      {children}
    </ButtonStyled>
  );
};

export default Button;

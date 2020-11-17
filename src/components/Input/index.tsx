import React, { InputHTMLAttributes } from 'react';

import { Container, InputC, Label } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement>  {
  label: string;
  name: string;
}

const Input: React.FC<Props> = ({ label, name, ...inputProps }) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <InputC name={name} {...inputProps} />
    </Container>
  );
}

export default Input;
import React, { TextareaHTMLAttributes } from 'react';

import { Container, Textarea, Label } from './styles';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
}

const TextArea: React.FC<Props> = ({ label, name, ...textareaProps  }) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <Textarea name={name} {...textareaProps} />
    </Container>
  );
}

export default TextArea;
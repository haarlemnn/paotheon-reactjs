import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 0.8rem;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  color: var(--color-text-primary);
`;

export const Textarea = styled.textarea `
  width: 100%;
  min-height: 6rem;
  height: 10rem;
  margin-top: 0.8rem;
  border-radius: 0.4rem;
  border: 1px solid var(--color-input-border);
  outline: 0;
  padding: 1.2rem 1.6rem;
  resize: none;
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  color: var(--color-text-primary);
`;

export const InputC = styled.input`
  width: 100%;
  height: 5rem;
  margin-top: 0.8rem;
  border-radius: 0.4rem;
  border: 1px solid var(--color-input-border);
  outline: 0;
  padding: 0 1.6rem;
  background: transparent;
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 74rem;
  min-height: 8rem;

  background: #FFF;
  border-radius: 0.4rem;
  box-shadow: 0px 3px 8px 1px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Icon = styled.img`
  
`;

export const InfoText = styled.p`
  color: var(--color-text-primary);
  font-weight: 400;
  font-size: 1.5rem;

  max-width: 70%;
`;

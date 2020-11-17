import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0.8rem 0;
  margin-top: 1rem;

  display: flex;
  align-items: center;

  border-top: 0.1rem solid var(--color-input-border);
  &:first-child {
    margin-top: 0;
    border-bottom: 0.1rem solid var(--color-input-border);
  }
`;

export const Content = styled.div``;

export const Image = styled.img`
  width: 6rem;
`;

export const Title = styled.h1`
  font-family: Ubuntu;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text-primary);
`;

export const Details = styled.h2`
  font-family: Ubuntu;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--color-text-secondary);
`;

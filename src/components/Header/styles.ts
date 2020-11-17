import styled from 'styled-components';

export const Container = styled.header`
  background: var(--color-primary);
  width: 100%;
  height: 30vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.main`
  flex: 1;
  padding: 1.5rem 3rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  @media(min-width: 700px) {
    padding: 0 30rem;
  }
`;

export const HeaderBar = styled.div`
  height: 8vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 2rem;
`;

export const Button = styled.a`
  height: 4rem;

  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  cursor: pointer;
`;

export const Icon = styled.img``;

export const Title = styled.strong`
  font: 700 2.4rem Ubuntu;
  max-width: 70%;

  &.logo {
    font-size: 1.8rem;
    font-family: Fredoka One;
  }
`;

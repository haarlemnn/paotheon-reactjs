import styled from 'styled-components';

export const Container = styled.div`
  background: var(--color-primary);
  width: 100vw;
  min-height: 100vh !important;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.main`
  flex: 1;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;

  padding: 0 2rem;
`;

export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(min-width: 700px) {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  &.map {
    width: 6rem;
  }
`;

export const Footer = styled.footer`
  background: var(--color-background);
  width: 100vw;
  height: 30vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.h2`
  font: 700 2.2rem Ubuntu;
  line-height: 3rem;

  &.logo {
    font-size: 2.4rem;
    font-family: Fredoka One;
    margin-top: 0.6vh;

    @media(min-width: 700px) {
      font-size: 8rem;
      margin-left: 1rem;
    }
  }
`;

export const Text = styled.span`
  font-size: 1.4rem;
  color: var(--color-text-primary);

  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;

  ::before, ::after {
    content: "";

    height: 0.1rem;
    width: 40vw;
    background: var(--color-text-primary);
  }
`;

export const Button = styled.button`
  width: 35rem;
  height: 5.5rem;

  background: var(--color-primary);
  border: 0;
  border-radius: 0.4rem;
  box-shadow: 0px 3px 8px 1px rgba(0, 0, 0, 0.1);

  cursor: pointer;

  transition: filter 0.3s;

  &.register {
    background: var(--color-secondary);
  }

  &:hover {
    filter: brightness(80%);
  }
`;

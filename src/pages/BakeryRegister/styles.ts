import styled from 'styled-components';

import saveIcon from '../../assets/images/icons/save.svg';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh !important;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.main`
  flex: 1;
  width: 100vw;
  max-width: 700px;

  padding: 1.5rem 2rem;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 74rem;

  margin-top: 2rem;

  background: #FFF;
  border-radius: 0.4rem;
  box-shadow: 0px 3px 8px 1px rgba(0, 0, 0, 0.1);

  padding: 2rem 2rem;
`;

export const InputBlock = styled.div`
  width: 100%;
  margin-top: 0.8rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 6rem;

  border:  0;
  border-radius: 0.4rem;

  display: flex;
  align-items: center;

  margin-top: 2rem;

  background: var(--color-secondary);

  transition: filter 0.3s;

  cursor: pointer;

  &:hover {
    filter: brightness(80%);
  }
`;

export const ButtonIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  border-top-left-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;

  width: 6rem;
  height: 6rem;

  background-color: rgba(0, 0, 0, 0.08);

  ::after {
    content: "";
    background-image: url(${saveIcon});

    height: 2.5rem;
    width: 2.5rem;
  }
`;

export const ButtonText = styled.p`
  flex: 1;
  text-align: center;
`;

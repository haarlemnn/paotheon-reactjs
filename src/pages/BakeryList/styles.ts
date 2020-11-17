import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh !important;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
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

`;

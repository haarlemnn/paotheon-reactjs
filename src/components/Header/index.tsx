import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Container, Content, HeaderBar, Icon, Title } from './styles';

import backIcon from '../../assets/images/icons/back.svg';

interface Props {
  title: string;
}

const Header: React.FC<Props> = ({ title }) => {
  const history = useHistory();

  return (
    <Container>
      <HeaderBar>
        <Button onClick={() => history.push('/')}>
          <Icon src={backIcon} alt='Voltar para home' />
          Voltar
        </Button>
        <Title className="logo">PÃOTHEON</Title>
      </HeaderBar>
      <Content>
        <Title>{title}</Title>
      </Content>
    </Container>
  );
}

export default Header;
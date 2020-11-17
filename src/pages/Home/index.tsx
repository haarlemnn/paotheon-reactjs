import React from 'react';
import { useHistory } from 'react-router-dom';

import { Button, Container, Content, Footer, Image, Logo, Text, Title } from './styles';

import logo from '../../assets/images/logo.svg';
import mapIcon from '../../assets/images/map.svg';

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <Container >
      <Content>
        <Logo>
          <Image src={logo} alt="Paotheon"></Image>
          <Title className="logo">PÃOTHEON</Title>
        </Logo>
        <Title >Encontre a padaria mais próxima de você!</Title>
        <Image src={mapIcon} alt="Ícone de mapa" className="map"/>
      </Content>

      <Footer >
        <Button type="button" className="register" onClick={() => history.push('/new-bakery')}>Cadastrar Padaria</Button>
        <Text>ou</Text>
        <Button type="button" onClick={() => history.push('/bakeries')}>Encontrar Padarias</Button>
      </Footer>
    </Container>
  );
}

export default Home;
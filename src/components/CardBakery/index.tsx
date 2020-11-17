import React from 'react';

import { Container, Content, Details, Image, Title } from './styles';

import logo from '../../assets/images/logo.svg';

import convertMinutesToHours from '../../utils/convertMinutesToHours';

interface Bakery {
  id: number;
  name: string;
  details: string;
  openHour: number;
  closeHour: number;
  latitude: number;
  longitude: number;
}

interface Props {
  bakery: Bakery;
}

const CardBakery: React.FC<Props> = ({ bakery }) => {
  return (
    <Container>
      <Image src={logo} alt="Pãotheon"/>
      <Content>
        <Title>{bakery.name}</Title>
        <Details>Detalhes: {bakery.details}</Details>
        <Details>Horário: Dás {convertMinutesToHours(bakery.openHour)} às {convertMinutesToHours(bakery.closeHour)}</Details>
      </Content>
    </Container>
  );
}

export default CardBakery;
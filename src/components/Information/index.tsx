import React from 'react';

import { Container, Icon, InfoText } from './styles';

import warningIcon from '../../assets/images/icons/warning.svg';

interface Props {
  info: string;
}

const Information: React.FC<Props> = ({ info }) => {
  return (
    <Container>
      <Icon src={warningIcon} alt="Atenção!"/>
      <InfoText>{info}</InfoText>
    </Container>
  );
}

export default Information;
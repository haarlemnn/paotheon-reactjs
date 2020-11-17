import React, { useState, useCallback, ChangeEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { ButtonIcon, ButtonText, Container, Content, Form, InputBlock, SubmitButton } from './styles';

import Header from '../../components/Header';
import Information from '../../components/Information';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Map from '../../components/Map';

import api from '../../services/api';
import convertHoursToMinutes from '../../utils/convertHoursToMinutes';

interface Position {
  latitude: number;
  longitude: number;
}

const BakeryRegister: React.FC = () => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [details, setDetails] = useState('');
  const [openHour, setOpenHour] = useState('');
  const [closeHour, setCloseHour] = useState('');

  const [position, setPosition] = useState<Position>({
    latitude: -13.6573358,
    longitude: -69.7160042,
  });

  

  const handleSubmit = useCallback((event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    api.post('/bakeries', {
      name,
      details,
      openHour: convertHoursToMinutes(openHour),
      closeHour: convertHoursToMinutes(closeHour),
      latitude: position.latitude,
      longitude: position.longitude,
    }).then(() => {
      alert('Padaria cadastrada com sucesso!');
      history.push('/');
    }).catch(() => {
      alert('Falha ao cadastrar padaria 😕... Tente novamente!');
    });
  }, 
  [
    name,
    details,
    openHour,
    closeHour,
    position,
    history,
  ]);

  return (
    <Container>
      <Header title="Cadastro de nova padaria" />

      <Content>
        <Information info="Preencha todos os campos!"/>

        <Form onSubmit={handleSubmit}>
          <Input 
            label="Nome da padaria" 
            name="name" 
            type="text" 
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <TextArea 
            label="Detalhes da padaria" 
            name="details"
            required
            value={details}
            onChange={(event) => setDetails(event.target.value)}
          />

          <Input 
            label="Horário de abertura" 
            name="from" 
            type="time"
            required
            value={openHour}
            onChange={(event) => setOpenHour(event.target.value)}
          />

          <Input 
            label="Horário de fechamento" 
            name="to" 
            type="time"
            required
            value={closeHour}
            onChange={(event) => setCloseHour(event.target.value)}
          />

          <Map 
            label="Escolha a localização no mapa"
            position={position}
            onChangePosition={(lat: number, lng: number) => {
              setPosition({
                latitude: lat,
                longitude: lng
              });
            }}
          />

          <SubmitButton type="submit">
            <ButtonIcon />
            <ButtonText>Salvar padaria</ButtonText>
          </SubmitButton>
          
        </Form>
      </Content>
    </Container>
  );
}

export default BakeryRegister;
import React, { useState, useEffect, useCallback } from 'react';

import { Container, Content, Form, InputBlock } from './styles';

import Header from '../../components/Header';
import Information from '../../components/Information';
import Input from '../../components/Input';
import Map from '../../components/Map';

import api from '../../services/api';
import convertHoursToMinutes from '../../utils/convertHoursToMinutes';
import CardBakery from '../../components/CardBakery';

interface Position {
  latitude: number;
  longitude: number;
}

interface Bakery {
  id: number;
  name: string;
  details: string;
  openHour: number;
  closeHour: number;
  latitude: number;
  longitude: number;
}

const BakeryList: React.FC = () => {
  const [hour, setHour] = useState(new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }));
  const [bakeries, setBakeries] = useState<Bakery[]>();

  const [position, setPosition] = useState<Position>({
    latitude: -13.6573358,
    longitude: -69.7160042,
  });

  const findBakeries = useCallback(() => {
    if (hour && position) {
      api.get('/bakeries', {
        params: {
          hour: convertHoursToMinutes(hour),
          latitude: position.latitude,
          longitude: position.longitude,
        }
      }).then((response) => {
        setBakeries(response.data);
      }).catch(() => {
        alert('Erro ao encontrar padarias, tente novamente.');
      })
    }
  }, [hour, position]);

  useEffect(() => {
    findBakeries();
  }, [findBakeries]);

  return (
    <Container>
      <Header title="Padarias próximas a você"/>

      <Content>
        <Information info="Escolha o horário de funcionamento"/>
        <Form>
          <InputBlock>
            <Input 
              label="Horário de funcionamento" 
              name="from" 
              type="time"
              required
              value={hour}
              onChange={(event) => setHour(event.target.value)}
              onBlur={findBakeries}
            />
          </InputBlock>

          <Map
            label="Padarias encontradas"
            isList={true}
            bakeries={bakeries}
            onChangePosition={(lat: number, lng: number) => {
              setPosition({
                latitude: lat,
                longitude: lng
              });
            }}
          />

          {bakeries && bakeries?.length > 0 && bakeries.map((bakery) => (
            <CardBakery key={bakery.id} bakery={bakery} />
          ))}
        </Form>
      </Content>
    </Container>
  );
}

export default BakeryList;
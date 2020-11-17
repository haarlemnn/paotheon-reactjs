import React from 'react';
import { TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import { Container, Content, Label } from './styles';

import MapMarker from './MapMarker';

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
  label: string;
  position?: {
    latitude: number;
    longitude: number;
  }
  onChangePosition: Function;
  bakeries?: Array<Bakery>;
  isList?: boolean;
}

const Map: React.FC<Props> = ({ label, position, onChangePosition, isList, bakeries }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Content center={position ? [position.latitude, position.longitude] : [-13.6573358, -69.7160042]} zoom={15} scrollWheelZoom={false} >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapMarker isList={isList} onChangePosition={(lat: number, lng: number) => onChangePosition(lat, lng)} />
        {bakeries && bakeries?.length > 0 && bakeries?.map((bakery) => (
          <MapMarker key={bakery.id}  isList={isList} bakery={bakery} />
        ))}
      </Content>
    </Container>
  );
}

export default Map;
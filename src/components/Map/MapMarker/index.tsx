import React, { useState, useEffect } from 'react';
import { useMapEvents, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';

import { BakeryMapIcon, UserMapIcon } from '../MapIcon';

import { Container, Details, Title } from './styles';

import convertMinutesToHours from '../../../utils/convertMinutesToHours';

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
  onChangePosition?: Function;
  isList?: boolean;
  bakery?: Bakery;
}

const MapMarker: React.FC<Props> = ({ onChangePosition, isList, bakery }) => {
  const [position, setPosition] = useState<LatLngExpression>({
    lat: 0,
    lng: 0,
  });

  const map = useMapEvents({
    click(e) {
      if (onChangePosition && !isList) {
        setPosition(e.latlng);
        onChangePosition(e.latlng.lat, e.latlng.lng);
        map.flyTo(e.latlng, map.getZoom());
      }
    },
    locationfound(e) {
      setPosition(e.latlng);
      if (onChangePosition) {
        onChangePosition(e.latlng.lat, e.latlng.lng);
      }
      map.flyTo(e.latlng, map.getZoom());
    },
  })

  useEffect(() => {
    map.locate();
  }, [map]);

  return position === null ? null : (
    <Marker icon={!isList || bakery ? BakeryMapIcon : UserMapIcon} position={bakery ? [bakery.latitude, bakery.longitude] : position}>
      <Popup>
        {bakery ? (
          <Container>
            <Title>{bakery.name}</Title>
            <Details>Detalhes: {bakery.details}</Details>
            <Details>Horario: Dás {convertMinutesToHours(bakery.openHour)} às {convertMinutesToHours(bakery.closeHour)}</Details>
          </Container>
        ) : <Title>Você está aqui</Title>}
      </Popup>
    </Marker>
  )
}

export default MapMarker;
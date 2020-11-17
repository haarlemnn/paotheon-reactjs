import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';


export const Container = styled.div`
  margin-top: 0.8rem;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  color: var(--color-text-primary);
`;

export const Content = styled(MapContainer)`
  width: 100%;
  height: 40vh;

  margin-top: 0.8rem;

  border-radius: 0.4rem;
  border: 1px solid var(--color-input-border);

  @media(min-width: 700px) {
    height: 60vh;
  }
`;

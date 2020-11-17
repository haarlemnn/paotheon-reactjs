import L from 'leaflet';
import markerIcon from '../../../assets/images/icons/marker.svg';
import userMarkerIcon from '../../../assets/images/icons/user-marker.svg';

export const BakeryMapIcon = L.icon({
  iconUrl: markerIcon,

  iconSize: [48, 58],
  iconAnchor: [19, 58],
  popupAnchor: [5, -60]
})

export const UserMapIcon = L.icon({
  iconUrl: userMarkerIcon,

  iconSize: [38, 48],
  iconAnchor: [9, 48],
  popupAnchor: [10, -50]
});

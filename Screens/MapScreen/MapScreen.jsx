import React from 'react';
import { Marker } from 'react-native-maps';
import { MapContainer, MapViews } from './MapScreen.styled';

export default function MapScreen({ route }) {
  const { cords } = route.params;

  return (
    <MapContainer>
      <MapViews
        initialRegion={{
          latitude: cords.latitude,
          longitude: cords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.06,
        }}>
        <Marker
          coordinate={{ latitude: cords.latitude, longitude: cords.longitude }}
          title="travel photo"
        />
      </MapViews>
    </MapContainer>
  );
}

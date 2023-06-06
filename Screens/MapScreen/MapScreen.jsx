import React from 'react';
import { Marker } from 'react-native-maps';
import { MapContainer, MapViews } from './MapScreen.styled';

export default function MapScreen() {
    return (
        <MapContainer>
            <MapViews
                initialRegion={{
                    latitude: 48.9731,
                    longitude: 23.9836,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.06,
                }}
            >
                <Marker
                    coordinate={{ latitude: 48.9731, longitude: 23.9836 }}
                    title="travel photo"
                />
            </MapViews>
        </MapContainer>
    );
}


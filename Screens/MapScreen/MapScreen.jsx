import React from 'react';
import { Marker } from 'react-native-maps';
import { MapContainer, MapViews } from './MapScreen.styled';

export default function MapScreen() {
    return (
        <MapContainer>
            <MapViews
                initialRegion={{
                    latitude: 49.589542,
                    longitude: 34.551273,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.06,
                }}
            >
                <Marker
                    coordinate={{latitude: 49.589542, longitude: 34.551273}}
                    title="travel photo"
                />
            </MapViews>
        </MapContainer>
    );
}


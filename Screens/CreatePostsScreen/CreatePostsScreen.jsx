import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { AddPhoto, ButtonCreate, ButtonCreateText, CameraCreate, CreateContainer, CreateInput, InputIcon, InputWrapper, Photo, PhotoImg, PhotoText } from './CreatePostsScreen.styled';

export default function CreatePostsScreen({ navigation }) {
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState('');
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const takePhoto = async () => {
        const photos = await camera.takePictureAsync();
        const location = await Location.getCurrentPositionAsync();
        console.log('latitude', location.coords.latitude);
        console.log('longitude', location.coords.longitude);
        setPhoto(photos.uri);
    };
    const sendPhoto = () => {
        navigation.navigate('PostsScreen', { photo });
    };

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            console.log(status);
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <CreateContainer>
            <CameraCreate ref={setCamera}>
                {photo && (
                    <Photo>
                        <PhotoImg source={{ uri: photo }} />
                        <AddPhoto onPress={takePhoto}>
                            <Ionicons name="camera" size={24} color="#BDBDBD" />
                        </AddPhoto>
                    </Photo>
                )}

                <AddPhoto onPress={takePhoto}>
                    <Ionicons name="camera" size={24} color="#BDBDBD" />
                </AddPhoto>
            </CameraCreate>
            <PhotoText>Завантажте фото</PhotoText>
            <CreateInput
                placeholder="Назва..."
                placeholderTextColor="#BDBDBD"
                marginTop={32}
            />
            <InputWrapper>
                <CreateInput
                    placeholder="Місцевість..."
                    placeholderTextColor="#BDBDBD"
                    paddingLeft={28}
                />
                <InputIcon
                    name="location-outline"
                    size={24}
                    color="#BDBDBD"
                />
            </InputWrapper>

            <ButtonCreate 
            // {backgroundColor: photo ? '#FF6C00' : '#F6F6F6',}
                activeOpacity={0.7}
                onPress={sendPhoto}
            >
                <ButtonCreateText
                        // color: photo ? '#FFFFFF' : '#BDBDBD'
                >
                    Опублікувати
                </ButtonCreateText>
            </ButtonCreate>
        </CreateContainer>
    );
}
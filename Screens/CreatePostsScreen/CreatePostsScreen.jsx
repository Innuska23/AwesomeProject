import React, { useState, useEffect, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { AddPhoto, ButtonCreate, ButtonCreateText, CameraCreate, CreateContainer, CreateInput, InputIcon, InputWrapper, Photo, PhotoImg, PhotoText } from './CreatePostsScreen.styled';
import { Camera, CameraType } from 'expo-camera';
import { Image, Text } from 'react-native';

export default function CreatePostsScreen({ route, navigation }) {
    const cameraRef= useRef(null);
    const [photoBase64, setPhotoBase64] = useState(null);
    const [name, setName] = useState(null);
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [coords, setCoords] = useState(null);

    const takePhoto = async () => {
        try {
            if (cameraRef.current) {
                const options = { quality: 0, base64: true, };
                // photoUri && await cameraRef.current.resumePreview();
                const data = await cameraRef.current.takePictureAsync(options);
                setPhotoBase64(data.uri);

                if (data.uri) {
                // await cameraRef.current.pausePreview();
                }
            }

        const location = await Location.getCurrentPositionAsync();
        const [{city, country}] = await Location.reverseGeocodeAsync(location.coords);
        
        setLocation(`${city}, ${country}`)
        setCoords(location.coords);

        } catch (e) {
            console.error(e)
        }

    };

    const handleSubmit = async () => {
        const existPosts = route.params?.posts ?? [];
        const newPost = {photoBase64,cords: {...coords}, location, name};;
        setPhotoBase64(null);
        setLocation(null)
        setName(null);
        // setCoords(null);

        navigation.navigate('PostsScreen', {...route.params, posts: [...existPosts, newPost] });
    };

    useEffect(() => {
        (async () => {
            try {
                const {status: cameraPerm} = await Camera.requestCameraPermissionsAsync()
                let { status: locationPerm } = await Location.requestForegroundPermissionsAsync();

                if (cameraPerm !== 'granted' || locationPerm !== 'granted') {
                    setErrorMsg('Permission to access location was denied');
                    return;
                }

            } catch (e) {
                console.error(e)
            }
        })();
    }, []);

    if (errorMsg) {
        return <Text>{errorMsg}</Text>
    }

    const isDisabledSubmit = !photoBase64 || !location || !name

    return (
        <CreateContainer>
            <CameraCreate ref={cameraRef} type={CameraType.back}>
                <Photo>
                    <AddPhoto onPress={takePhoto}>
                        <Ionicons name="camera" size={24} color="red" />
                    </AddPhoto>
                </Photo>
            </CameraCreate>

            <PhotoText>Завантажте фото</PhotoText>

            {photoBase64 && <Image source={{uri: photoBase64, width: 100, height: 100}} />}

            <CreateInput
                placeholder="Назва..."
                placeholderTextColor="#BDBDBD"
                marginTop={32}
                onChangeText={setName}
                value={name}
            />

            <InputWrapper>
                <CreateInput
                    placeholder="Місцевість..."
                    placeholderTextColor="#BDBDBD"
                    paddingLeft={28}
                    onChangeText={setLocation}
                    value={location}
                />
                <InputIcon
                    name="location-outline"
                    size={24}
                    color="#BDBDBD"
                />
            </InputWrapper>

            <ButtonCreate 
                activeOpacity={0.7}
                onPress={handleSubmit}
                disabled={isDisabledSubmit}
                $isDisabled={isDisabledSubmit}
            >
                <ButtonCreateText>
                    Опублікувати
                </ButtonCreateText>
            </ButtonCreate>
        </CreateContainer>
    );
}
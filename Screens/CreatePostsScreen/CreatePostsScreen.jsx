import React, { useState, useEffect, useRef } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import {
  AddPhoto,
  ButtonCreate,
  ButtonCreateText,
  CameraCreate,
  CreateContainer,
  CreateInput,
  InputIcon,
  InputWrapper,
  Photo,
  PhotoImg,
  PhotoText,
} from './CreatePostsScreen.styled';
import { Camera, CameraType } from 'expo-camera';
import { Image, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { createNewPost } from '../../redux/post/postOperations';

// import { storage, database } from "../../firebase/config";
// import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import { ref as refDb, set, push } from "firebase/database";

export default function CreatePostsScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const cameraRef = useRef(null);
  const [photoBase64, setPhotoBase64] = useState(null);
  const [name, setName] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [coords, setCoords] = useState(null);

  const takePhoto = async () => {
    try {
      if (cameraRef.current) {
        const options = { quality: 0, base64: true };
        // photoUri && await cameraRef.current.resumePreview();
        const data = await cameraRef.current.takePictureAsync(options);
        setPhotoBase64(data);

        if (data.uri) {
          // await cameraRef.current.pausePreview();
        }
      }

      const location = await Location.getCurrentPositionAsync();
      const [{ city, country }] = await Location.reverseGeocodeAsync(location.coords);

      setLocation(`${city}, ${country}`);
      setCoords(location.coords);
    } catch (e) {
      console.error(e);
    }
  };

  const handleSubmit = async () => {
    try {
      const newPost = { photoBase64: photoBase64.base64, cords: { ...coords }, location, name };
      await dispatch(createNewPost(newPost)).unwrap();

      navigation.navigate('PostsScreen');
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { status: cameraPerm } = await Camera.requestCameraPermissionsAsync();
        let { status: locationPerm } = await Location.requestForegroundPermissionsAsync();

        if (cameraPerm !== 'granted' || locationPerm !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
      } catch (e) {
        console.error(e);
      }
    })();
  }, []);

  if (errorMsg) {
    return <Text>{errorMsg}</Text>;
  }

  const isDisabledSubmit = !photoBase64 || !location || !name;

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
        <InputIcon name="location-outline" size={24} color="#BDBDBD" />
      </InputWrapper>

      <ButtonCreate
        activeOpacity={0.7}
        onPress={handleSubmit}
        disabled={isDisabledSubmit}
        $isDisabled={isDisabledSubmit}>
        <ButtonCreateText>Опублікувати</ButtonCreateText>
      </ButtonCreate>
    </CreateContainer>
  );
}

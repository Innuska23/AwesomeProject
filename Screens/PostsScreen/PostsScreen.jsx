import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, Text, Image } from 'react-native';
import {
  ContainerPostScreen,
  LocationText,
  Photo,
  PhotoContainer,
  PhotoName,
  NameEmailWrapper,
  Email,
  Name,
  WrapperPostScreen,
  AvatarPost,
  CommentContainer,
} from './PostsScreen.styled';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { authSignOut } from '../../redux/auth/authOperations';
import { useFocusEffect } from '@react-navigation/native';
import { postList } from '../../redux/post/postOperations';

export default function PostsScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(postList());
    }, [])
  );

  return (
    <ContainerPostScreen>
      <WrapperPostScreen>
        <AvatarPost></AvatarPost>
        <NameEmailWrapper>
          <Name>Ім'я</Name>
          <Email>Електронна пошта</Email>
        </NameEmailWrapper>
      </WrapperPostScreen>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item: { id, photoBase64, coords, location, name } }) => (
          <PhotoContainer>
            <Image
              source={{ uri: `data:image/jpg;base64,${photoBase64}`, width: 100, height: 100 }}
              style={{ height: 100, width: 100 }}
            />

            <PhotoName>{name}</PhotoName>

            <CommentContainer>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Comments', { id, photoBase64 });
                }}>
                <Ionicons name="chatbubble-outline" size={24} color="#BDBDBD" />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center' }}
                onPress={() => {
                  navigation.navigate('MapScreen', { coords });
                }}>
                <Ionicons name="location-outline" size={24} color="#BDBDBD" />
                <LocationText>{location}</LocationText>
              </TouchableOpacity>
            </CommentContainer>
          </PhotoContainer>
        )}
      />
    </ContainerPostScreen>
  );
}

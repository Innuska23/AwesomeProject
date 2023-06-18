import React, { useState, useEffect } from 'react';
import { TouchableOpacity, FlatList, Text, Image, ActivityIndicator } from 'react-native';
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
import { useFocusEffect } from '@react-navigation/native';
import { postList } from '../../redux/post/postOperations';

export default function PostsScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  const [isLoading, setIsLoading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setIsLoading(true);
      dispatch(postList())
        .unwrap()
        .finally(() => setIsLoading(false));
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

      {isLoading ? (
        <ActivityIndicator size="large" color="#FF6C00" />
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item: { id, photoBase64, cords, location, name } }) => (
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
                    navigation.navigate('MapScreen', { cords });
                  }}>
                  <Ionicons name="location-outline" size={24} color="#BDBDBD" />
                  <LocationText>{location}</LocationText>
                </TouchableOpacity>
              </CommentContainer>
            </PhotoContainer>
          )}
        />
      )}
    </ContainerPostScreen>
  );
}

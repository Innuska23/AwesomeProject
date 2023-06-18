import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Text, FlatList } from 'react-native';

import { ref, onValue, get } from 'firebase/database';
import { database } from '../../firebase/config';
import {
  CommentsInfo,
  ImgWrap,
  InfoWrap,
  LocationInfo,
  MessageProfile,
  PhotoProfile,
  PostWrap,
  ProfileContainer,
  UserFotoWrap,
  UserInfo,
  UserLogin,
  UserTextWrap,
} from './ProfileScreen.styled';

const ProfileScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  const { userId, login } = useSelector((state) => state.auth);

  const getAllPosts = async () => {
    const postsRef = await ref(database, 'posts/' + userId);

    onValue(
      postsRef,
      (snapshot) => {
        setPosts([]);

        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();

          let count = 0;

          const postRef = ref(database, `posts/${userId}/${childKey}/comments`);

          onValue(postRef, (snapshot) => {
            snapshot.forEach((childSnapshot) => {
              const childData = childSnapshot.val();
              if (childData) {
                count += 1;
              }
            });
          });

          setPosts((state) => [...state, { postId: childKey, ...childData, count }]);
        });
      },
      {
        onlyOnce: false,
      }
    );
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <ProfileContainer>
      <UserInfo>
        <UserFotoWrap></UserFotoWrap>
        <UserTextWrap>
          <UserLogin>{login}</UserLogin>
        </UserTextWrap>
      </UserInfo>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <PostWrap>
            <ImgWrap>
              <PhotoProfile source={{ uri: item.photo }} />
            </ImgWrap>

            <MessageProfile>{item.message}</MessageProfile>
            <InfoWrap>
              <CommentsInfo
                onPress={() =>
                  navigation.navigate('Comments', {
                    photo: item.photo,
                    postId: item.postId,
                    userId: item.userId,
                  })
                }>
                <Text style={{ marginLeft: 8 }}>{item.count}</Text>
              </CommentsInfo>
              <LocationInfo
                onPress={() => {
                  navigation.navigate('Map', { photo: item.photo });
                }}>
                <Text style={{ marginLeft: 8 }}>{item.locationMessage || 'Location'}</Text>
              </LocationInfo>
            </InfoWrap>
          </PostWrap>
        )}
      />
    </ProfileContainer>
  );
};

export default ProfileScreen;

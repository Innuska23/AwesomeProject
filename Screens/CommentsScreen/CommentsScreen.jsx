import { Text, FlatList, ActivityIndicator } from 'react-native';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { AntDesign } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { commentList, createNewComment } from '../../redux/post/postOperations';
import {
  ButtonComment,
  ContainerComments,
  СommentContainer,
  ImagePost,
  InputComment,
  WrapperComments,
  UserName,
  MyСommentContainer,
  MyСommentTime,
  СommentTime,
} from './CommentsScreen.styled';

import { auth } from '../../firebase/config';

const CommentsScreen = ({ route }) => {
  const { uid, displayName } = auth.currentUser;
  const { id, photoBase64 } = route.params;
  const [comment, setComment] = useState('Some comment');
  const [allComments, setAllComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      const fetchComments = async () => {
        try {
          setIsLoading(true);
          const result = await dispatch(commentList(id)).unwrap();

          setAllComments(result);
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      };

      fetchComments();

      return () => setAllComments([]);
    }, [id])
  );

  const handleNewComment = async () => {
    try {
      setIsLoading(true);

      await dispatch(createNewComment({ id, comment })).unwrap();
      const result = await dispatch(commentList(id)).unwrap();

      setAllComments(result);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContainerComments>
      <WrapperComments>
        <ImagePost source={{ uri: `data:image/jpg;base64,${photoBase64}` }} />
      </WrapperComments>

      {isLoading ? (
        <ActivityIndicator size="large" color="#FF6C00" />
      ) : (
        <FlatList
          data={allComments}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({ item }) =>
            item.uid === uid ? (
              <MyСommentContainer>
                <UserName>{item.displayName}</UserName>
                <Text>{item.comment}</Text>
                <MyСommentTime>{new Date(item.created_at).toLocaleDateString()}</MyСommentTime>
              </MyСommentContainer>
            ) : (
              <СommentContainer>
                <UserName>{item.displayName}</UserName>
                <Text>{item.comment}</Text>
                <СommentTime>{new Date(item.created_at).toLocaleDateString()}</СommentTime>
              </СommentContainer>
            )
          }
        />
      )}

      <InputComment
        placeholderTextColor={'#BDBDBD'}
        placeholder="Комментировать..."
        value={comment}
        onChangeText={(value) => setComment(value)}></InputComment>

      <ButtonComment activeOpacity={0.8} onPress={handleNewComment}>
        <AntDesign name="arrowup" size={20} color="#FFFFFF" />
      </ButtonComment>
    </ContainerComments>
  );
};

export default CommentsScreen;

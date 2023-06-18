import {
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';

import { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AntDesign } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { commentList, createNewComment } from '../../redux/post/postOperations';
import { ButtonComment, ContainerComments, ImagePost, InputComment, WrapperComments } from './CommentsScreen.styled';

const CommentsScreen = ({ route, navigation }) => {
  const { id, photoBase64 } = route.params;
  const [comment, setComment] = useState('123123123');
  const [allComments, setAllComments] = useState([]);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      const fetchComments = async () => {
        const result = await dispatch(commentList(id)).unwrap();

        setAllComments(result);
      };

      fetchComments();
    }, [id])
  );

  const handleNewComment = async () => {
    try {
      await dispatch(createNewComment({ id, comment })).unwrap();
      const result = await dispatch(commentList(id)).unwrap();

      setAllComments(result);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <ContainerComments>
      <WrapperComments>
        <ImagePost source={{ uri: `data:image/jpg;base64,${photoBase64}` }} />
        <Text>{allComments.length}</Text>
        <SafeAreaView style={styles.wrapper}>
          <FlatList
            data={allComments}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            renderItem={({ item }) => (
              <СommentContainer>
                <UserName>{item.created_at}</UserName>
                <Text>{item.comment}</Text>
              </СommentContainer>
            )}
          />
        </SafeAreaView>
      </WrapperComments>

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


import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AntDesign } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';
import { commentList, createNewComment } from '../redux/post/postOperations';

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
    <View style={styles.container}>
      <View style={styles.postWrapper}>
        <Image source={{ uri: `data:image/jpg;base64,${photoBase64}` }} style={styles.post} />
        <Text>{allComments.length}</Text>
        <SafeAreaView style={styles.wrapper}>
          <FlatList
            data={allComments}
            keyExtractor={(item, index) => {
              return index.toString();
            }}
            renderItem={({ item }) => (
              <View style={styles.commentContainer}>
                <Text style={styles.userName}>{item.created_at}</Text>
                <Text>{item.comment}</Text>
              </View>
            )}
          />
        </SafeAreaView>
      </View>

      <TextInput
        placeholderTextColor={'#BDBDBD'}
        placeholder="Комментировать..."
        style={styles.input}
        value={comment}
        onChangeText={(value) => setComment(value)}></TextInput>

      <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={handleNewComment}>
        <AntDesign name="arrowup" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

export default CommentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  wrapper: {
    height: 280,
  },
  commentContainer: {
    padding: 16,
    marginBottom: 24,
    borderRadius: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderColor: 'rgba(0, 0, 0, 0.03)',
    borderWidth: 1,
  },
  post: {
    height: 240,
    width: '100%',
    borderRadius: 8,
    marginBottom: 32,
  },
  input: {
    marginBottom: 16,
    padding: 16,
    height: 50,
    fontSize: 16,
    lineHeight: 18,
    color: '#212121',
    backgroundColor: '#F6F6F6',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  userName: {
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 18,
    color: '#BDBDBD',
  },
  button: {
    position: 'absolute',
    left: '84%',
    top: '85.5%',
    marginHorizontal: 25,
    marginTop: 32,
    marginBottom: 30,
    backgroundColor: '#FF6C00',
    height: 35,
    width: 35,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

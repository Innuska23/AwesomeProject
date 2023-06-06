import React, { useState, useEffect } from 'react';
import {TouchableOpacity, FlatList} from 'react-native';
import {ContainerPostScreen, LocationText, Photo, PhotoContainer, PhotoName, NameEmailWrapper, Email, Name, WrapperPostScreen, AvatarPost, CommentContainer} from './PostsScreen.styled';
import { Ionicons } from '@expo/vector-icons';

export default function PostsScreen({ route, navigation }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (route.params) {
            setPosts(prevState => [...prevState, route.params]);
        }
    }, [route.params]);

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
                renderItem={item => (
                    <PhotoContainer>
                        <Photo source={{ uri: item.photo }}/>
                        <PhotoName>Ліс</PhotoName>
                        <CommentContainer>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Comments');
                                }}
                            >
                                <Ionicons name="chatbubble-outline" size={24} color="#BDBDBD" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{ flexDirection: 'row', alignItems: 'center' }}
                                onPress={() => {
                                    navigation.navigate('MapScreen');
                                }}
                            >
                                <Ionicons name="location-outline" size={24} color="#BDBDBD" />
                                <LocationText></LocationText>
                            </TouchableOpacity>
                        </CommentContainer>
                    </PhotoContainer>
                )}
            />
        </ContainerPostScreen>
    );
}
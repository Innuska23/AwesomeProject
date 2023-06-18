import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { authSignOut } from "../../redux/auth/authOperations";

import { ref, onValue, get } from "firebase/database";
import { database } from "../../firebase/config";
import { CommentsInfo, ImgWrap, InfoWrap, LocationInfo, MessageProfile, PhotoProfile, PostWrap, ProfileContainer, UserFotoWrap, UserInfo, UserLogin, UserTextWrap } from "./ProfileScreen.styled";

const ProfileScreen = ({ route, navigation }) => {
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();
    const signOut = () => {
        dispatch(authSignOut());
    };

    const { userId, login } = useSelector((state) => state.auth);

    const getAllPosts = async () => {
        const postsRef = await ref(database, "posts/" + userId);

        onValue(
            postsRef,
            (snapshot) => {
                setPosts([]);

                snapshot.forEach((childSnapshot) => {
                    const childKey = childSnapshot.key;
                    const childData = childSnapshot.val();

                    const commentsSnapshot = childSnapshot.child("comments");
                    console.log("commentsSnapshot", commentsSnapshot.val());

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

                    setPosts((state) => [
                        ...state,
                        { postId: childKey, ...childData, count },
                    ]);
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
                {/* <TouchableOpacity style={styles.logOutBtn} onPress={signOut}> */}
                {/* <Image source={require("../../assets/img/logOut.png")} /> */}
                {/* </TouchableOpacity> */}
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
                                    navigation.navigate("Comments", {
                                        photo: item.photo,
                                        postId: item.postId,
                                        userId: item.userId,
                                    })
                                }
                            >
                                {/* <Image source={require("../../assets/img/comments.png")} /> */}
                                <Text style={{ marginLeft: 8 }}>{item.count}</Text>
                            </CommentsInfo>
                            <LocationInfo
                                onPress={() => {
                                    navigation.navigate("Map", { photo: item.photo });
                                }}
                            >
                                {/* <Image source={require("../../assets/img/map-pin.png")} /> */}
                                <Text style={{ marginLeft: 8 }}>
                                    {item.locationMessage || "Location"}
                                </Text>
                            </LocationInfo>
                        </InfoWrap>
                    </PostWrap>
                )}
            />
        </ProfileContainer>
    );
};

export default ProfileScreen;

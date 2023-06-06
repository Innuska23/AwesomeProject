import React from "react";;
import { Ionicons, Feather } from "@expo/vector-icons";
import PostsScreen from "../PostsScreen/PostsScreen";
import CreatePostsScreen from "../CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../ProfileScreen";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ButtonHome, ButtonLogOut, TextItem } from "../Home/Home.styled";

const Tabs = createBottomTabNavigator();

const NavigationConfig = {
    headerStyle: {
        borderBottomWidth: 1,
        borderColor: "#E5E5E5",
    },
    headerTitleAlign: "center",
    tabBarShowLabel: false,
    tabBarActiveBackgroundColor: "#FF6C00",
    tabBarActiveTintColor: "#ffffff",
    tabBarInactiveTintColor: "#212121",
    tabBarItemStyle: {
        borderRadius: 20,
    },
    tabBarStyle: {
        height: 83,
        paddingTop: 9,
        paddingBottom: 34,
        paddingHorizontal: 82,
        borderTopWidth: 1,
        borderColor: "#E5E5E5",
    },
};

const Home = () => {
    const navigation = useNavigation();
    const route = useRoute();

    return (
        <Tabs.Navigator screenOptions={NavigationConfig}>
            <Tabs.Screen
                name="PostsScreen"
                component={PostsScreen}
                options={{
                    headerTitle: () => <TextItem>Публікації</TextItem>,

                    headerRight: () => (
                        <ButtonLogOut>
                            <Ionicons
                                name="log-out-outline"
                                size={24}
                                color="#BDBDBD"
                                onPress={() => navigation.navigate("Login")}
                            />
                        </ButtonLogOut>
                    ),
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-grid-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="CreatePostsScreen"
                component={CreatePostsScreen}
                options={{
                    headerTitle: () => (
                        <TextItem>Створити публікацію</TextItem>
                    ),

                    headerLeft: () => (
                        <ButtonHome
                            onPress={() =>
                                navigation.navigate("Home", {
                                    screen: `${route.params.screen}`,
                                    params: {
                                        user: route.params.params.user,
                                    },
                                })
                            }
                        >
                            <Ionicons name="arrow-back-outline" size={24} color="#212121" />
                        </ButtonHome>
                    ),
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="add" size={24} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    headerTitle: "",
                    headerRight: () => (
                        <ButtonLogOut onPress={() => navigation.navigate("Login")}>
                            <Ionicons name="log-out-outline" size={24} color="#BDBDBD" />
                        </ButtonLogOut>
                    ),
                    tabBarIcon: ({ color }) => (
                        <Feather name="user" size={24} color={color} />
                    ),
                }}
            />
        </Tabs.Navigator>
    );
};

export default Home;

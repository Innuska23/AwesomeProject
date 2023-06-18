import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, Feather } from '@expo/vector-icons';

import PostsScreen from '../../../Screens/PostsScreen/PostsScreen';
import CreatePostsScreen from '../../../Screens/CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../../../Screens/ProfileScreen/ProfileScreen';

import { ButtonHome, ButtonLogOut, TextItem } from './AppRoutes.styled';
import { useDispatch } from 'react-redux';
import { authSignOut } from '../../../redux/auth/authOperations';
import CommentsScreen from '../../../Screens/CommentsScreen/CommentsScreen';

const Tabs = createBottomTabNavigator();

const NavigationConfig = {
  headerStyle: {
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  headerTitleAlign: 'center',
  tabBarShowLabel: false,
  tabBarActiveBackgroundColor: '#FF6C00',
  tabBarActiveTintColor: '#ffffff',
  tabBarInactiveTintColor: '#212121',
  tabBarItemStyle: {
    borderRadius: 20,
  },
  tabBarStyle: {
    height: 83,
    paddingTop: 9,
    paddingBottom: 34,
    paddingHorizontal: 82,
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
  },
};

export const AppRoutes = () => {
  const navigation = useNavigation();
  console.log(
    '🚀 ~ file: AppRoutes.jsx:42 ~ AppRoutes ~ navigation:',
    navigation.getCurrentRoute()
  );
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await dispatch(authSignOut()).unwrap();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Tabs.Navigator initialRouteName="PostsScreen" screenOptions={NavigationConfig}>
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          headerTitle: () => <TextItem>Публікації</TextItem>,

          headerRight: () => (
            <ButtonLogOut onPress={handleLogout}>
              <Ionicons name="log-out-outline" size={24} color="#BDBDBD" />
            </ButtonLogOut>
          ),
          tabBarIcon: ({ color }) => <Ionicons name="ios-grid-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          headerTitle: () => <TextItem>Створити публікацію</TextItem>,

          headerLeft: () => (
            <ButtonHome onPress={() => navigation.navigate('PostsScreen')}>
              <Ionicons name="arrow-back-outline" size={24} color="#212121" />
            </ButtonHome>
          ),
          tabBarIcon: ({ color }) => <Ionicons name="add" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: '',
          headerRight: () => (
            <ButtonLogOut onPress={handleLogout}>
              <Ionicons name="log-out-outline" size={24} color="#BDBDBD" />
            </ButtonLogOut>
          ),
          tabBarIcon: ({ color }) => <Feather name="user" size={24} color={color} />,
        }}
      />

      <Tabs.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          headerTitle: () => <TextItem>Коментарі</TextItem>,

          headerLeft: () => (
            <ButtonHome onPress={() => navigation.navigate('PostsScreen')}>
              <Ionicons name="arrow-back-outline" size={24} color="#212121" />
            </ButtonHome>
          ),
          tabBarIcon: ({ color }) => <Ionicons name="add" size={24} color={color} />,
        }}
      />
    </Tabs.Navigator>
  );
};

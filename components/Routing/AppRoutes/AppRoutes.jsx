import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, Feather } from '@expo/vector-icons';

import PostsScreen from '../../../Screens/PostsScreen/PostsScreen';
import CreatePostsScreen from '../../../Screens/CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from '../../../Screens/ProfileScreen/ProfileScreen';

import { ButtonHome, ButtonLogOut, TextItem } from './AppRoutes.styled';
import { useDispatch } from 'react-redux';
import { authSignOut } from '../../../redux/auth/authOperations';
import CommentsScreen from '../../../Screens/CommentsScreen/CommentsScreen';
import MapScreen from '../../../Screens/MapScreen/MapScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigationConfig = {
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

const TabRoutes = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      navigation.setOptions({
        headerShown: false,
      });

      return () => {
        navigation.setOptions({
          headerShown: true,
        });
      };
    }, [])
  );

  const handleLogout = async () => {
    try {
      await dispatch(authSignOut()).unwrap();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Tab.Navigator initialRouteName="PostsScreen" screenOptions={TabNavigationConfig}>
      <Tab.Screen
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
      <Tab.Screen
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
      <Tab.Screen
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
    </Tab.Navigator>
  );
};

export const AppRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={TabRoutes} />
      <Stack.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ headerTitle: () => <TextItem>Публікації</TextItem> }}
      />
      <Stack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{ headerTitle: () => <TextItem>Карта</TextItem> }}
      />
    </Stack.Navigator>
  );
};

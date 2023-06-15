import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RegistrationScreen from '../../Screens/RegistrationScreen';
import LoginScreen from '../../Screens/LoginScreen';

const AuthStack = createNativeStackNavigator();

export const AuthRoutes = () => (
  <AuthStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="Registration" component={RegistrationScreen} />
    <AuthStack.Screen name="Login" component={LoginScreen} />
  </AuthStack.Navigator>
);

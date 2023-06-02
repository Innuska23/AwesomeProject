import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.otf'),
    // 'Roboto-Medium': require('./assets/fonts/Roboto-Medium.otf'),
    // 'Roboto-Bold': require('./assets/fonts//Roboto-Bold.otf'),
  });

  // console.log(fontsLoaded);
  // if (!fontsLoaded) {
  //   return null;
  // }

  return (
      <LoginScreen/>
  )
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import { useFonts } from 'expo-font'
import styled from '@emotion/native';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Main } from './Main';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useCallback } from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts//Roboto-Bold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <StyledApp>
        {/* <NavigationContainer>
          <MainStack.Navigator initialRouteName="Login">
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{ headerShown: false }} />
            <MainStack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name="Comments"
              component={CommentsScreen}
              options={{ headerShown: false }}
            />
          </MainStack.Navigator>
        </NavigationContainer> */}
        <Main />
      </StyledApp>
    </Provider>
  )
};

const StyledApp = styled.View`
    font-family: 'Roboto-Regular';
    width: 100%;
    height: 100%;
`;
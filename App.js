import { useFonts } from 'expo-font';
import styled from '@emotion/native';
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';

import { store } from './redux/store';
import { Router } from './components/Routing/Router';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts//Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaView>
        <StyledApp>
          <Router />
        </StyledApp>
      </SafeAreaView>
    </Provider>
  );
}

const StyledApp = styled.View`
  font-family: 'Roboto-Regular';
  width: 100%;
  height: 100%;
`;

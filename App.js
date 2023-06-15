import { useFonts } from 'expo-font';
import styled from '@emotion/native';
import { Provider } from 'react-redux';

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
      <StyledApp>
        <Router />
      </StyledApp>
    </Provider>
  );
}

const StyledApp = styled.View`
  font-family: 'Roboto-Regular';
  width: 100%;
  height: 100%;
`;

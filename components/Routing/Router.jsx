import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { AppRoutes } from './AppRoutes/AppRoutes';
import { AuthRoutes } from './AuthRoutes';

export const Router = () => {
  const { isLogin } = useSelector((state) => state.auth);

  return <NavigationContainer>{isLogin ? <AppRoutes /> : <AuthRoutes />}</NavigationContainer>;
};

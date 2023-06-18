import React, { useState } from 'react';
import { AuthLayout } from '../../components/AuthLayout';
import { StyledInput } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';
import { useKeyboard } from '../../hooks/useKeyboard';
import {
  ButtonRegistation,
  ButtonText,
  ContainerText,
  IconPlus,
  LinkText,
  Photo,
  PhotoWrapper,
  StyledWrapperText,
  Text,
  TextAutorization,
} from "./componets.styled";
import { useNavigation } from '@react-navigation/native';
import { authSignUp } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';

const avatarSelect = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.canceled) {
    setAvatar(result.assets[0].uri);
  }
};

const initialState = {
  email: '',
  password: '',
  username: '',
};

export default RegistrationScreen = () => {
  const dispatch = useDispatch();

  const { heightKeyboard } = useKeyboard();
  const [user, setUser] = useState(initialState);
  const navigation = useNavigation();

  const handleFieldChange = (fieldName) => (text) => {
    setUser((prevState) => ({
      ...prevState,
      [fieldName]: text,
    }));
  };

  const handleSignUp = async () => {
    try {
      await dispatch(authSignUp(user)).unwrap();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AuthLayout heightKeyboard={heightKeyboard}>
      <PhotoWrapper>
        <Photo resizeMode="cover" />
        <IconPlus source={require('../../assets/images/add.png')} onPress={() => avatarSelect()} />
      </PhotoWrapper>

      <ContainerText $mt="60">
        <Text>Реєстрація</Text>
      </ContainerText>

      <StyledInput
        placeholder="Логін"
        $mb="32"
        value={user.username}
        onChangeText={handleFieldChange('username')}
      />

      <StyledInput
        placeholder="Адреса електронної пошти"
        value={user.email}
        onChangeText={handleFieldChange('email')}
      />

      <PasswordInput
        placeholder="Пароль"
        value={user.password}
        onChangeText={handleFieldChange('password')}
      />

      {!heightKeyboard && (
        <>
          <ButtonRegistation onPress={handleSignUp} activeOpacity={0.7}>
            <ButtonText>Зареєструватись</ButtonText>
          </ButtonRegistation>

          <StyledWrapperText $mb="12">
            <LinkText>
              Вже є акаунт?{' '}
              <TextAutorization onPress={() => navigation.navigate('Login')}>
                Увійти
              </TextAutorization>
            </LinkText>
          </StyledWrapperText>
        </>
      )}
    </AuthLayout>
  );
};

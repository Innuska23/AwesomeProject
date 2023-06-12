import React, { useState } from "react";
import { AuthLayout } from "../components/AuthLayout";
import { StyledInput } from "../components/Input";
import { PasswordInput } from "../components/PasswordInput";
import { useKeyboard } from "../hooks/useKeyboard";
import { ButtonRegistation, ButtonText, ContainerText, IconPlus, LinkText, Photo, PhotoWrapper, StyledWrapperText, Text, TextAutorization } from "./componets.styled";
import { useNavigation } from '@react-navigation/native';
import { authSignUp } from "../redux/auth/authOperations";
import { useDispatch } from "react-redux";

const initialState = {
    email: "temp@mail.com",
    password: "123456",
}

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
            const result = await dispatch(authSignUp(user));
            setUser(initialState)
            keyboardHide();

            navigation.navigate("Home", {
                screen: "PostsScreen",
                params: {
                    user: user,
                },
            });

        } catch (e) {

        }


    };


    return <AuthLayout heightKeyboard={heightKeyboard}>
        <PhotoWrapper>
            <Photo resizeMode="cover" />
            <IconPlus source={require('../assets/images/add.png')} />
        </PhotoWrapper>

        <ContainerText $mt='60'>
            <Text>Реєстрація</Text>
        </ContainerText>

        <StyledInput placeholder="Логін" $mb='32' value={user.username} onChangeText={handleFieldChange('username')} />

        <StyledInput placeholder="Адреса електронної пошти" value={user.email} onChangeText={handleFieldChange('email')} />

        <PasswordInput placeholder="Пароль" value={user.password} onChangeText={handleFieldChange('password')} />

        {!heightKeyboard && <>
            <ButtonRegistation onPress={handleSignUp}>
                <ButtonText>Зареєструватись</ButtonText>
            </ButtonRegistation>

            <StyledWrapperText $mb="12">
                <LinkText>Вже є акаунт? <TextAutorization onPress={() => navigation.navigate("Login")}>Увійти</TextAutorization></LinkText>
            </StyledWrapperText>
        </>}
    </AuthLayout>
};

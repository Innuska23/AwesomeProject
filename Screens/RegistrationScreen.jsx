import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from "react-native";
import { AuthLayout } from "../components/AuthLayout";
import { StyledInput } from "../components/Input";
import { PasswordInput } from "../components/PasswordInput";
import { useKeyboard } from "../hooks/useKeyboard";
import { ButtonRegistation, ButtonText, ContainerText, IconPlus, LinkText, Photo, PhotoWrapper, StyledWrapperText, Text } from "./componets.styled";

export default RegistrationScreen = () => {
    const { heightKeyboard } = useKeyboard();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        avatar: "",
    });
    const handleUsernameChange = (text) => {
        setUser((prevState) => ({
            ...prevState,
            username: text,
        }));
    };

    const handlePasswordChange = (text) => {
        setUser((prevState) => ({
            ...prevState,
            password: text,
        }));
    };

    const handleEmailChange = (text) => {
        setUser((prevState) => ({
            ...prevState,
            email: text,
        }));
    };

    return <AuthLayout heightKeyboard={heightKeyboard}>
        <PhotoWrapper>
            <Photo resizeMode="cover" />
            <IconPlus source={require('../assets/images/add.png')} />
        </PhotoWrapper>


        <ContainerText>
            <Text>Реєстрація</Text>
        </ContainerText>

        <StyledInput placeholder="Логін" $mb='32' value={user.username} onChangeText={handleUsernameChange} />
       
        <StyledInput placeholder="Адреса електронної пошти" value={user.email} onChangeText={handleEmailChange} />

        <PasswordInput placeholder="Пароль" value={user.password} onChangeText={handlePasswordChange} />


        {!heightKeyboard && <>
            <ButtonRegistation>
                <ButtonText>Зареєструватись</ButtonText>
            </ButtonRegistation>

            <StyledWrapperText $mb="12">
                <LinkText>Вже є акаунт? Увійти</LinkText>
            </StyledWrapperText>
        </>}
    </AuthLayout>
};

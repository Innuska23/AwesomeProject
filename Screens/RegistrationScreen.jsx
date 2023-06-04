import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View } from "react-native";
import { AuthLayout } from "../components/AuthLayout";
import { StyledInput } from "../components/Input";
import { PasswordInput } from "../components/PasswordInput";
import { useKeyboard } from "../hooks/useKeyboard";
import { ButtonRegistation, ButtonText, ContainerText, IconPlus, LinkText, Photo, PhotoWrapper, StyledWrapperText, Text } from "./componets.styled";

const initialState = {
    email: "",
    password: "",
}

export default RegistrationScreen = () => {
    const { heightKeyboard } = useKeyboard();
    const [user, setUser] = useState(initialState);

    const handleFieldChange = (fieldName) => (text) => {
        setUser((prevState) => ({
            ...prevState,
            [fieldName]: text,
        }));
    };

    const handleSignUp = () => {
        console.log(user);
        setUser(initialState);
    };

    return <AuthLayout heightKeyboard={heightKeyboard}>
        <PhotoWrapper>
            <Photo resizeMode="cover" />
            <IconPlus source={require('../assets/images/add.png')} />
        </PhotoWrapper>


        <ContainerText>
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
                <LinkText>Вже є акаунт? Увійти</LinkText>
            </StyledWrapperText>
        </>}
    </AuthLayout>
};

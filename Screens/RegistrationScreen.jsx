import React, { useState } from "react";
import { AuthLayout } from "../components/AuthLayout";
import { StyledInput } from "../components/Input";
import { PasswordInput } from "../components/PasswordInput";
import { useKeyboard } from "../hooks/useKeyboard";
import { ButtonRegistation, ButtonText, ContainerText, IconPlus, LinkText, Photo, PhotoWrapper, StyledWrapperText, Text, TextAutorization } from "./componets.styled";
import { useNavigation } from '@react-navigation/native';

const initialState = {
    email: "",
    password: "",
}

export default RegistrationScreen = () => {
    const { heightKeyboard } = useKeyboard();
    const [user, setUser] = useState(initialState);
    const navigation = useNavigation();

    const handleFieldChange = (fieldName) => (text) => {
        setUser((prevState) => ({
            ...prevState,
            [fieldName]: text,
        }));
    };

    const handleSignUp = () => {
        navigation.navigate("Home", {
            screen: "PostsScreen",
            params: {
            user: user,
            },
        });
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

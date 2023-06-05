import React, { useState } from "react";
import { AuthLayout } from "../components/AuthLayout";
import { StyledInput } from "../components/Input";
import { StyledLink } from "../components/Link";
import { PasswordInput } from "../components/PasswordInput";
import { useKeyboard } from "../hooks/useKeyboard";
import { ButtonRegistation, ButtonText, ContainerText, LinkText, StyledWrapperText, Text } from "./componets.styled";
import { useNavigation } from '@react-navigation/native';

const initialState = {
    email: "",
    password: "",
}

export default RegistrationScreen = () => {
    const navigation = useNavigation();
    const [user, setUser] = useState(initialState);

    const { heightKeyboard } = useKeyboard();

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
            <ContainerText>
                <Text>Увійти</Text>
            </ContainerText>

            <StyledInput placeholder="Адреса електронної пошти" $mt='32' value={user.email} onChangeText={handleFieldChange('email')} />

            <PasswordInput placeholder="Пароль" value={user.password} onChangeText={handleFieldChange('password')} />

            {!heightKeyboard && <>
                <ButtonRegistation onPress={handleSignUp}>
                    <ButtonText>Увійти</ButtonText>
                </ButtonRegistation>

                <StyledWrapperText $mb='46'>
                    <LinkText>Немає акаунту? </LinkText>
                    <StyledLink onPress={() => navigation.navigate("Registration")}>Зареєструватися </StyledLink>
                </StyledWrapperText>
            </>}
        </AuthLayout>
};

import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";
import { AuthLayout } from "../components/AuthLayout";
import { StyledInput } from "../components/Input";
import { StyledLink } from "../components/Link";
import { PasswordInput } from "../components/PasswordInput";
import { useKeyboard } from "../hooks/useKeyboard";
import { ButtonRegistation, ButtonText, ContainerText, LinkText, StyledWrapperText, Text } from "./componets.styled";

export default RegistrationScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { heightKeyboard } = useKeyboard();

    const handlePasswordChange = (text) => {
        setPassword(text);
    };
    
    const handleEmailChange = (text) => {
        setEmail(text);
    };
    

    return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <AuthLayout heightKeyboard={heightKeyboard}>
            <ContainerText>
                <Text>Увійти</Text>
            </ContainerText>

            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>

            <StyledInput placeholder="Адреса електронної пошти" $mt='32' value={email} onChangeText={handleEmailChange} />

            <PasswordInput placeholder="Пароль" value={password} onChangeText={handlePasswordChange} />
            
            </KeyboardAvoidingView>
            {!heightKeyboard && <>
                <ButtonRegistation>
                    <ButtonText>Увійти</ButtonText>
                </ButtonRegistation>

                <StyledWrapperText $mb='46'>
                    <LinkText>Немає акаунту? </LinkText>
                    <StyledLink>Зареєструватися</StyledLink>
                </StyledWrapperText>
            </>}
        </AuthLayout>
    </TouchableWithoutFeedback>
};

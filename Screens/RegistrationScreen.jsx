import React from "react";
import { AuthLayout } from "../components/AuthLayout";
import { StyledInput } from "../components/Input";
import { PasswordInput } from "../components/PasswordInput";
import { useKeyboard } from "../hooks/useKeyboard";
import { ButtonRegistation, ButtonText, ContainerText, IconPlus, LinkText, Photo, PhotoWrapper, StyledWrapperText, Text } from "./componets.styled";

export default RegistrationScreen = () => {
    const { heightKeyboard } = useKeyboard();

    return <AuthLayout heightKeyboard={heightKeyboard}>
        <PhotoWrapper>
            <Photo resizeMode="cover" />
            <IconPlus source={require('../assets/images/add.png')} />
        </PhotoWrapper>

        <ContainerText>
            <Text>Реєстрація</Text>
        </ContainerText>

        <StyledInput placeholder="Логін" $mb='32' />

        <StyledInput placeholder="Адреса електронної пошти" />


        <PasswordInput placeholder="Пароль" />

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

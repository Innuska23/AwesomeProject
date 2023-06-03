import React from "react";
import { AuthLayout } from "../components/AuthLayout";
import { StyledInput } from "../components/Input";
import { StyledLink } from "../components/Link";
import { PasswordInput } from "../components/PasswordInput";
import { useKeyboard } from "../hooks/useKeyboard";
import { ButtonRegistation, ButtonText, ContainerText, LinkText, StyledWrapperText, Text } from "./componets.styled";

export default RegistrationScreen = () => {
    const { heightKeyboard } = useKeyboard();

    return <AuthLayout heightKeyboard={heightKeyboard}>
        <ContainerText>
            <Text>Увійти</Text>
        </ContainerText>

        <StyledInput placeholder="Адреса електронної пошти" $mt='32' />

        <PasswordInput placeholder="Пароль" />

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
};

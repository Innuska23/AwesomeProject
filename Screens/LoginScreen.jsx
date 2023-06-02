import React, { useState, useEffect } from "react";
import { Keyboard } from "react-native";
import { ButtonRegistation, ButtonShow, ButtonText, Container, ContainerText, FhotoWraper, Input, InputButton, Label, LinkText, LoginContainer, PasswordWraper, Photo, ShowButton, Text, WrapperContainer, WrapperImage } from "./RegistrationScreen.styled";

export default RegistrationScreen = () => {

    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setIsKeyboardOpen(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setIsKeyboardOpen(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return <WrapperContainer>
        <WrapperImage source={require('./BG/PhotoBG.png')} resizeMode="cover">

            <LoginContainer>
                <ContainerText>
                    <Text>Увійти</Text>
                </ContainerText>
                <Input placeholder="Адреса електронної пошти" />
                <PasswordWraper>
                    <Input placeholder="Пароль" />
                    <ShowButton><Label>Показати</Label></ShowButton>
                </PasswordWraper>
                {!isKeyboardOpen && <><ButtonRegistation>
                    <ButtonText>Увійти</ButtonText>
                </ButtonRegistation>
                    <LinkText>Немає акаунту? Зареєструватися</LinkText></>}
            </LoginContainer>
        </WrapperImage>
    </WrapperContainer>
};

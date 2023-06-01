import React, { useState, useEffect } from "react";
import { Keyboard } from "react-native";
import { ButtonRegistation, ButtonShow, ButtonText, Container, ContainerText, FhotoWraper, Input, InputButton, Label, LinkText, PasswordWraper, Photo, ShowButton, Text, WrapperContainer, WrapperImage } from "./RegistrationScreen.styled";

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

            <Container>
            <FhotoWraper> 
                <Photo resizeMode="cover" />
            </FhotoWraper>
                <ContainerText>
                    <Text>Реєстрація</Text>
                </ContainerText>
                <Input placeholder="Логін" />
                <Input placeholder="Адреса електронної пошти" />
                <PasswordWraper>
                    <Input placeholder="Пароль" />
                    <ShowButton><Label>Показати</Label></ShowButton>
                </PasswordWraper>
                {!isKeyboardOpen && <><ButtonRegistation>
                    <ButtonText>Зареєструватись</ButtonText>
                </ButtonRegistation>
                    <LinkText>Вже є акаунт? Увійти</LinkText></>}
            </Container>
        </WrapperImage>
    </WrapperContainer>
};

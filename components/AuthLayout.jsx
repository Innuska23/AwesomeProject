import styled from '@emotion/native';
import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';

export const AuthLayout = ({ children, heightKeyboard }) => {
    return <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ContentWrapper>
            <BgImage source={require('../assets/images/bg.png')} resizeMode="cover" />

            {/* <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}> */}
                <WrapperContainer $bottom={ parseFloat(heightKeyboard)}>
                    <Container >{children}</Container>
                </WrapperContainer>
            {/* </KeyboardAvoidingView> */}
        </ContentWrapper>
    </TouchableWithoutFeedback>
}

const ContentWrapper = styled.View`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: flex-end;
`;

const BgImage = styled.ImageBackground`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
`;
const WrapperContainer = styled.View`
    position: absolute;
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: flex-end;
    bottom: ${props => console.log(props.$bottom) || props.$bottom ? `${props.$bottom}px` : 0};
`;

const Container = styled.View`
    ${'' /* position: relative; */}
    width: 100%;
    ${'' /* justify-content: flex-end; */}
    z-index: 1;
    background-color: #FFFFFF;
    border-radius: 25px 25px 0px 0px;
    padding: 32px 16px 32px 16px; 
`;
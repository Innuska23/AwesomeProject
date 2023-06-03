import styled from '@emotion/native';
import React from 'react';

export const AuthLayout = ({children, heightKeyboard}) => { 
    return <WrapperContainer>
        <BgImage source={require('../assets/images/bg.png')} resizeMode="cover" />

        <Container $bottom={heightKeyboard}>{children}</Container>
    </WrapperContainer>
}

const WrapperContainer = styled.View`
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
    bottom: 0px;
    width: 100%;
    height: 100%;
`;

const Container = styled.View`
    position: relative;
    width: 100%;
    justify-content: flex-end;
    z-index: 1;
    background-color: #FFFFFF;
    border-radius: 25px 25px 0px 0px;
    padding: 32px 16px 32px 16px; 
    bottom: ${props => props.$bottom ? `${props.$bottom}px` : "0px"};
`;
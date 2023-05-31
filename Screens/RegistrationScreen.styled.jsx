import styled, { css } from '@emotion/native'

export const Container = styled.View`
    width: 100%;
    height: 100%;
    ${'' /* display: flex;
    position: absolute;
    justify-content: center;
    align-items: center; */}
    ${'' /* width: 375,
    height: 549, */}
    background-color: ##FFFFFF;
    padding: 92px 16px 78px 16px; 
`;

export const ContainerText = styled.Text`
    ${'' /* font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
    letter-spacing: 0.01em; */}
    color: #212121;

`;

export const Input = styled.TextInput`
    background-color: #BDBDBD;
    width: 100%;
`;
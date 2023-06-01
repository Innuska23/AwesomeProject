import styled, { css } from '@emotion/native'

export const WrapperContainer = styled.View`
    font-family: 'Roboto';
    width: 100%;
    height: 100%;

`;

export const WrapperImage = styled.ImageBackground`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    position: relative;
`;

export const FhotoWraper = styled.View`
    position: absolute;
    z-index: 1000;
    left: 140px;
    top: -60px;
    flex: 1;
`;

export const Photo= styled.Image`
    position: relative;
    width: 120px;
    height: 120px;
    background: #F6F6F6;
    border-radius: 16px;
    flex: 1;
    z-index: 2;
`;

export const Container = styled.View`
    position: relative;
    width: 100%;
    left: 0px;
    ${'' /* height: 100%; */}
    height: 549px;
    background-color: #FFFFFF;
    border-radius: 25px 25px 0px 0px;
    padding: 92px 16px 78px 16px; 
    z-index: 1;

`;

export const ContainerText = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.Text`
    display: flex;
    color: #212121;
    font-size: 30px;
    margin-bottom: 32px;
    font-weight: 500;
`;

export const Input = styled.TextInput`
    &:nth-child(3) {
        width: 100%;
        font-weight: 400;
        line-height: 19px;
        margin-bottom: 16px;
        height: 50px;
        background: #F6F6F6;
        border: 1px solid #E8E8E8;
        border-radius: 8px;
        padding: 16px 15px;
}
`;
export const PasswordWraper = styled.View`
    position: relative;
`;

export const ShowButton = styled.TouchableOpacity`
    position: absolute; 
    top: 15px;
    right: 15px;
`;

export const Label = styled.Text`
    color: black;
`;

export const ButtonRegistation = styled.TouchableOpacity`
    display: flex;
    background-color: #FF6C00;
    border-radius: 100px;
    height: 51px;
    align-items: center;
    justify-content: center;
    margin-top: 43px;
`;

export const ButtonText = styled.Text`
    color: #FFFFFF;
`;

export const LinkText = styled.Text`
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    margin-top: 16px;
`;

import styled from '@emotion/native'

export const PhotoWrapper = styled.View`
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

export const IconPlus = styled.Image`
    position: relative;
    height: 25px;
    width: 25px;
    left: 107px;
    bottom: 40px;
    flex: 1;
    z-index: 3;
`;

export const Container = styled.View`
    position: relative;
    width: 100%;
    height: 549px;
    background-color: #FFFFFF;
    border-radius: 25px 25px 0px 0px;
    padding: 92px 16px 32px 16px; 
    z-index: 1;
`;

export const ContainerText = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    fontFamily: 'Roboto-Medium';
    margin-top: ${props => props.$mt ? `${props.$mt}px`: 0};
    ${'' /* margin-top: 60px; */}
`;

export const Text = styled.Text`
    display: flex;
    color: #212121;
    font-size: 30px;
    font-weight: 500;
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
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
`;

export const LinkText = styled.Text`
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #1B4371;
`;

export const StyledWrapperText = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
    margin-bottom: ${props => props.$mb ? `${props.$mb}px`: 0};
`
import styled from '@emotion/native';

export const ContainerPostScreen = styled.View `
    padding: 16px 32px;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #FFFFFF;
`;

export const WrapperPostScreen = styled.View`
    ${'' /* padding: 16px 32px;
    display: flex; */}
`;

export const WrapperEmailBox = styled.View`
    margin-top: 48,
    margin-left: 8,
`;

export const EmailPost = styled.Text`
    font-size: 11px;
    color: 'rgba(33, 33, 33, 0.8)';
`;

export const NamePost = styled.Text`
    font-size: 13px;
`;

export const AvatarPost = styled.Image`
    height: 60px;
    width: 60px;
`;

import styled from '@emotion/native';

export const ContainerPostScreen = styled.View `
    font-family: 'Roboto-Regular';
    ${'' /* padding: 16px 32px; */}
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #FFFFFF;
`;
export const WrapperPostScreen = styled.View`
    flex-direction: row;
`;

export const AvatarPost = styled.Image`
    margin-horizontal: 16px;
    width: 60px;
    height: 60px;
    background-color: black;
    border-radius: 16px;
    margin-top: 32px;
`;

export const LocationText = styled.Text`
    font-size: 16px;
    color: #212121;
`;

export const PhotoName = styled.Text`
    font-size: 16px;
    color: #212121;
`;

export const Photo = styled.Image`
    /* background-color: black; */
    height: 240px;
    width: 100px;
    `;

export const NameEmailWrapper= styled.View`
    margin-top: 48px;
    margin-left: 8px;
`;

export const Name = styled.Text`
    font-family: 'Roboto-Bold';
    font-size: 13px;
`;

export const Email = styled.Text`
    font-size: 11px;
    line-height: 13px;
    color: rgba(33, 33, 33, 0.8);
`;
export const  PhotoContainer = styled.View`
    margin-horizontal: 16px;
    margin-top: 32px;
`;

export const CommentContainer= styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;
`;

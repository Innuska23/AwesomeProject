import styled from '@emotion/native';

export const ProfileContainer = styled.View`
    flex: 1;
    padding-top: 32px;
    justify-content: center;
    margin-horizontal: 16px;
`;

export const UserInfo = styled.View`
    margin-bottom: 16px;
    align-items: center;
`;

export const UserFotoWrap = styled.View`
    width: 120px;
    height: 120px;
    background-color: #212121;
    border-radius: 16px;
    margin-bottom: 16px;
`;

export const UserTextWrap = styled.View`
`;

export const UserLogin = styled.Text`
    font-family: Roboto-Medium;
    font-size: 30px;
    color: #212121;
`;

export const PostWrap = styled.View`
    margin-bottom: 32px;
`; 
export const ImgWrap = styled.View`
    border-radius: 8px;
    over-flow: hidden;
    margin-bottom: 8px;
`;

export const PhotoProfile = styled.Image`
    width: 100%;
    height: 240px;
`;

export const InfoWrap = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
`;

export const CommentsInfo = styled.TouchableOpacity`
    flex-direction: row;
`;

export const LocationInfo= styled.TouchableOpacity`
    flex-direction: row;
`;
export const MessageProfile = styled.Text`
    font-family: "Roboto-Medium";
    font-size: 16px;
    color: #212121;
    margin-bottom: 10px;
`;
import styled from '@emotion/native';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';

export const CreateContainer = styled.View`
    flex: 1;
    background-color: '#FFFFFF';
    padding: 32px 16px;
`;

export const CameraCreate = styled(Camera)`
    ${'' /* marginHorizontal: 16px; */}
    height: 240px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
`;

export const CreateInput = styled.TextInput`
    margin-horizontal: 16px;
    border-bottom-width: 1px;
    border-bottom-color: #E8E8E8;
    height: 50px;
    font-family: 'Roboto-Regular';
    color: #212121;
    font-size: 16px;
`;

export const InputWrapper = styled.View`
    position: relative;
    margin-top: 16px;
`;

export const InputIcon = styled(Ionicons)`
    position: absolute;
    top: 13px;
    left: 16px;
`; 

export const PhotoImg = styled.Image`
    width: 100%;
    height: 100%;
`;

export const Photo = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0px;
    border-color: #fff;
`;

export const AddPhoto = styled.TouchableOpacity`
    position: absolute;
    background-color: #FFFFFF;
    height: 60px;
    width: 60px;
    border-radius: 100px;
    align-items: center;
    justify-content: center;
    top: 90px;
    left: 142px;
`;

export const PhotoText = styled.Text`
    margin-horizontal: 16px;
    margin-top: 8px;
    font-family: 'Roboto-Regular';
    font-size: 16px;
    color: #BDBDBD;
`;

export const ButtonCreateText = styled.Text`
    font-family: 'Roboto-Regular';
    font-size: 16px;
    text-align: center;
    padding-vertical: 16px;
    color: ${(props) => props.$isDisabled ? '#BDBDBD' : '#FFFFFF'}
`;

export const ButtonCreate = styled.TouchableOpacity`
    margin-horizontal: 16px;
    margin-top: 32px;
    border-radius: 100px;
    background-color: ${(props) => props.$isDisabled ? '#F6F6F6' :  '#FF6C00'} ;
`;
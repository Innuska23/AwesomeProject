import React from 'react';
import {View} from 'react-native';
import {AvatarPost, ContainerPostScreen, EmailPost, NamePost, WrapperEmailBox, WrapperPostScreen } from './PostScreen.styled';

export default function PostsScreen({}) {
    return (
        <ContainerPostScreen>
            <WrapperPostScreen>
                <AvatarPost/>
                {/* <WrapperEmailBox> */}
                    <NamePost>Ім'я</NamePost>
                    <EmailPost>Email</EmailPost>
                {/* </WrapperEmailBox> */}
            </WrapperPostScreen>
            </ContainerPostScreen>
    );
}
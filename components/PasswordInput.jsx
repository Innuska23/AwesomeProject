import styled from "@emotion/native";
import { useState } from "react";
import { StyledInput } from "./Input";

export const PasswordInput = ({ ...rest }) => {
    const [isShowPassword, setIsShowPassword] = useState();

    return <>
        <StyledInput secureTextEntry={!isShowPassword} {...rest} />
        <PasswordWrapper>
            <ShowButton onPress={() => setIsShowPassword(!isShowPassword)} ><Label>{isShowPassword ? 'Сховати' : 'Показати'}</Label></ShowButton>
        </PasswordWrapper>
    </>
}

const PasswordWrapper = styled.View`
    position: relative;
    width: 100%;
    height: 0px;
`;

const ShowButton = styled.TouchableOpacity`
    position: absolute; 
    top: -36px;
    right: 15px;
    z-index:1000;
`;

const Label = styled.Text`
    color: #1B4371;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
`;
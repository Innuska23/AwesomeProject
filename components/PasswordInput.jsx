import styled from "@emotion/native";
import { useState } from "react";
import { StyledInput } from "./Input";

export const PasswordInput = ({...rest}) => {
    const [isShowPassword, setIsShowPassword] = useState();

    return <PasswordWrapper>
        <StyledInput secureTextEntry={!isShowPassword} {...rest}/>

        <ShowButton onPress={() => setIsShowPassword(!isShowPassword)} ><Label>{isShowPassword ? 'Сховати' : 'Показати'}</Label></ShowButton>
    </PasswordWrapper>
}

const PasswordWrapper = styled.View`
    position: relative;
`;

const ShowButton = styled.TouchableOpacity`
    position: absolute; 
    top: 30px;
    right: 15px;
`;

const Label = styled.Text`
    color: #1B4371;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
`;
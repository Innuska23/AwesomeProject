import styled from "@emotion/native";
import { useState } from "react";

export const StyledInput = ({ onFocus, onBlur, ...rest }) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleBlur = (e) => {
        setIsFocused(false);
        onFocus && onBlur(e)

    }
    const handleFocus = (e) => {
        setIsFocused(true);
        onBlur && onFocus(e)
    }

    return <Input onBlur={handleBlur} onFocus={handleFocus} $isFocus={isFocused}  {...rest} />
}

const Input = styled.TextInput`
    width: 100%;
    line-height: 19px;
    height: 50px;
    font-weight: 400;
    font-size: 16px;
    background: ${props => `${props.$isFocus ?  '#FFF' : ' #F6F6F6'}`};
    border: ${props => `1px solid ${props.$isFocus ?  '#FF6C00' : '#E8E8E8'}`};
    border-radius: 8px;
    padding: 16px 15px;
    color: #212121;
    margin-top: ${props => props.$mt ? `${props.$mt}px` : "16px"};
`;
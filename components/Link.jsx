import styled from "@emotion/native";

export const StyledLink = ({ children, ...rest}) => {
    return <StyledTouchableOpacity {...rest}>
        <StyledText>{children}</StyledText>
    </StyledTouchableOpacity>
}

const StyledTouchableOpacity = styled.TouchableOpacity`
`;

const StyledText = styled.Text`
    text-decoration-line: underline;
    color: #1B4371;    
    font-size: 16px;
    line-height: 19px;
`
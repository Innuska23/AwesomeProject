import React from "react";
import { Container, ContainerText, Input } from "./RegistrationScreen.styled";

export default RegistrationScreen = () => (
    <Container>
        <ContainerText>Реєстрація</ContainerText>
        <Input placeholder="Логін"/>
        <Input placeholder="Адреса електронної пошти"/>
        <Input placeholder="Пароль"/>
    </Container>
);

// const styles = StyleSheet.create({
//     container: {
//         width: 375,
//         height: 549,
//         backgroundColor: "#FFFFFF"
//     },
//     title: {
//         fontFamily: 'Roboto',
//         fontStyle: "normal",
//         fontWeight: 500,
//         fontSize: 30,
//         lineHeight: 35,
//         textAlign: "center",
//     }
// });
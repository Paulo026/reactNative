import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: black;
`;

export const Alterar = styled.View`
    height: 450px;
    width: 300px;
    background-color: #191970;
    border-radius: 10;
    align-items: center;
    padding-top: 20px;
`;


export const Title = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    padding-top: 40px;
    padding-bottom: 10px;
    font-family: Arial;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 20px;
    padding-bottom: 8px;
`;

export const PressableAlterar = styled.Pressable`
    height: 35px;
    width: 170px;
    background-color: #6495ED;
    align-self: center;
    margin-top: 30px;
    border-radius: 10;
    font-weight: bold;
    align-items: center;
    justify-content: center;
`;
import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const CadastroPrd = styled.View`
    height: 450px;
    width: 300px;
    background-color: #191970;
    border-radius: 10;
`;

export const Title = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    padding-top: 20px;
    padding-bottom: 60px;
    font-family: Arial;
`;

export const ViewImagem = styled.View`
    color: #fff;
    text-align: center;
    font-size: 13px;
    margin-top: 5px;
`;

export const InnerText = styled.TextInput`
    margin-top: 15px;
    height: 35px;
    width: 220px;
    font-size: 16px;
    padding-left: 15px;
    background-color: #E6E6FA;
    align-self: center;
    border-radius: 5px;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 20px;
    padding-bottom: 8px;
`;

export const PressableCdProduto = styled.Pressable`
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
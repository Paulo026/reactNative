import styled from "styled-components/native";
import colors from "../../theme/colors";


export const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: ${colors. tertiary} ;
    align-items: center;
    padding: 40px;
`;


export const Logo = styled.Image`
   width: 130px;
    height: 130px;
    border-radius: 50%;
    padding-bottom:80px;
    margin-top: 10px;
`;

export const Acesso = styled.View`
    height: 640px;
    width: 360px;
    /* background-color: #191970; */
   
`;

export const ViewSenha = styled.View`
    color: ${colors.secondary};
    text-align: center;
    font-size: 13px;
    margin-top: 5px;
`;

export const ViewCadastro = styled.View`
    color: ${colors.secondary};
    text-align: center;
    font-size: 13px;
    padding-top: 5px;
`;


export const Title = styled.Text`
    color: ${colors.secondary};
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    padding-top: 150px;
    padding-bottom: 10px;
    font-family: Arial;
`;

export const InnerText = styled.TextInput`
    margin-top: 10px;
    height: 35px;
    width: 270px;
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

export const PressableLogin = styled.TouchableOpacity`
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
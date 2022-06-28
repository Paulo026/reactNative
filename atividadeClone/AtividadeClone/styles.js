import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "./src/theme/colors";


export const Container = styled(LinearGradient)`
    flex: 1;
    justify-content: center;
    align-items: center;
 `;

export const Logo= styled.Image`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    padding-bottom:80px;
    margin-top: -50px;
      
`;

export const Alterar = styled.View`
    height: 450px;
    width: 300px;
    border-radius: 10;
    align-items: center;
    padding-top: 5px;
`;


export const Title = styled.Text`
    color: ${colors.secondary};
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    padding-top: 100px;
    padding-bottom: 60px;
    font-family: Arial;
`;

export const ButtonText = styled.Text`
    color: ${colors.tertiary};
    font-weight: bolder;
    font-size: 20px;
    padding-bottom: 8px;    
`;

export const PressableAlterar = styled.TouchableOpacity.attrs((props) =>({
    activityOpacity: `${props.opacity}`,
}))`
   /* background-color:${(props) => props.backgroundColor || "#fff"}; */
   opacity: 0.8;
   height: 35px;
    width: 170px;
    align-self: center;
    margin-top: 30px;
    border-radius: 10;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    border: #00ffff solid 3px;
    
   
`;
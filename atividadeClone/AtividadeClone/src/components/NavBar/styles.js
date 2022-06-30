import styled from "styled-components/native";
import colors from "../../theme/colors";


export const Container = styled.View`
    width: 360px;
    height: 38px;
    /* background-color: #0ff; */
    opacity: 0.3;
    z-index: 1;   
    position: absolute;
   margin-top: 590px;
`;

export const WrapperNavBar = styled.View`
height: 38px;
width: 360px;
background-color: rgba(209, 209, 209, 0.50);
opacity:1;
height: 32px;
width: 32px;
flex-direction: row;
gap: 60px;
margin-top: 3px;
margin-bottom: 3px;
justify-content: center;
align-self: center;
`;



export default WrapperNavBar;

//Verificar se está correto
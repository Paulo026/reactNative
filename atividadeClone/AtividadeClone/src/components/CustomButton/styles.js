import colors from "../../theme/colors";
import styled from "styled-components/native";


export const ButtonText = styled.Text`
color: ${colors.tertiary};
font-weight: bolder;
font-size: 20px;
padding-bottom: 5px;    
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
    border: ${colors.quaternary} solid 3px;
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    
   
`;
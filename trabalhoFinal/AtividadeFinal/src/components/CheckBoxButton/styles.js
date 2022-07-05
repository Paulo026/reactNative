import styled from "styled-components/native";
import colors from "../../theme/colors";


export const Container = styled.View`
      flex: 1;    
      align-self:center;
      justify-content: center;    
    `;
    export const CheckBoxContainer = styled.View`
        flex-direction: row;
        margin-bottom: 5px;           
    `;   
    
    export const Label = styled.Text`
        margin: 0;
        margin-left: 5px;    
        color:${colors.tertiary};
        font-size: 12;
    `;

    export const IconLabel = styled.Text`
        text-align: center; 
        color:${colors.tertiary};   
        font-size: 12px; 
    `;
  
   
   
 
  
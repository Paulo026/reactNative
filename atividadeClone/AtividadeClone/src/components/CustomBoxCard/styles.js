import colors from "../../Theme/colors";
import styled from "styled-components/native";


export const CardWrapper = styled.View `
   width: 145px;
   height: 135px;   
   background-color: ${colors.tertiary};
   border-radius:10px;
   border: 2px solid ${colors.primary};
   margin: 10px 10px 10px 10px;

`;

export const CardBotton = styled.View`
    width: 116px;
    height: 20px;
    margin-top: 8px;
    align-self: center;
    /* border: 2px solid ${colors.primary}; */
    flex-direction: row;
`;

export const NumberButtonOne = styled.View`
    height: 20px;
    width: 33px;
    border: 2px solid ${colors.primary};
    flex-direction: row;
    justify-content: center;
`;

export const NumberButtonPlus = styled.View`
    height: 20px;
    width: 18px;
    border: 2px solid ${colors.primary};
    flex-direction: row;
    justify-content: center;
    padding-top: 3px;
`;

export const CardText = styled.Text`
    color: ${colors.secondary};
    font-size: 10px;
    margin-left: 3px;
    text-align: center;
`;

export const ProductImage = styled.Image`
    width:133px;
    height:50px;
    align-self:center;
    margin-top:5px;
    border-radius:5px;
`;

export const IconsGroup = styled.View`
	width: 360px;
	/* margin-left: 435px; */
	flex-direction: row;
    margin-top: 5px;
    `;






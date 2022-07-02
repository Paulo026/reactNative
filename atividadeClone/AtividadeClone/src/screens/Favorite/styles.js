import styled from "styled-components/native";
import colors from "../../theme/colors";


export const Container = styled.View`
flex: 1;
justify-content: center;
background-color: ${colors.tertiary};
align-items: center;
padding: 50px;
`;


export const Title = styled.Text`
	position: absolute;
	margin-bottom: 555px;
	font-size: 18px;
	color: ${colors.secondary};
	font-weight: 800;
	line-height: 22px;
`;

export const CardWrapper = styled.View `
   width: 330px;
   height: 95px;   
   background-color: ${colors.tertiary};
   border-radius:10px;
   border: 2px solid ${colors.primary};
   margin: 10px 10px 10px 10px;
`;

export const FavoriteImage = styled.Image`
    width: 140px;
    height: 80px;
    align-self:center;
    margin-top:-15px;
    border-radius:5px;
    align-self: flex-start;
    margin-left:5px;
`;

export const CardTextFavorite = styled.Text`
    color: ${colors.secondary};
    font-size: 12px;
    column-count: 2;
`;

export const TextView = styled.Text`
   margin-left: 150px;
   margin-top: -70px;
  font-size: 20px;
 line-height: 10px;
`;
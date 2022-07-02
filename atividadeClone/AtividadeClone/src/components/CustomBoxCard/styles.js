import colors from "../../Theme/colors";
import styled from "styled-components/native";

export const CardWrapper = styled.View`
	width: 135px;
	height: 135px;
	background-color: ${colors.tertiary};
	border-radius: 10px;
	border: 2px solid ${colors.primary};
	margin: 10px 10px 10px 10px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
	text-align: left;
`;
export const CardTextBold = styled.Text`
	color: ${colors.secondary};
	font-size: 10px;
	margin-left: 3px;
	text-align: left;
	font-weight: bolder;
`;

export const ProductImage = styled.Image`
	width: 122px;
	height: 50px;
	align-self: center;
	margin-top: 5px;
	border-radius: 5px;
`;

export const IconsGroup = styled.View`
	width: 360px;
	/* margin-left: 435px; */
	flex-direction: row;
	margin-top: 10px;
`;

export const CardGroup = styled.View`
	/* width: 360px;
	height: 600px; */
	align-self: center;
`;




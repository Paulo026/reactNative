import colors from "../../Theme/colors";
import styled from "styled-components/native";

export const CardWrapper = styled.View`
	width: 150px;
	height: 180px;
	background-color: ${colors.tertiary};
	border-radius: 10px;
	border: 2px solid ${colors.primary};
	margin: 10px 10px 10px 10px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const TopGroup = styled.View`
	top: 0;
`;

export const CardBotton = styled.View`
	width: 116px;
	height: 20px;
	margin-top: 8px;
	align-self: center;
	justify-content: center;
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
	color: ${colors.quaternary};
	font-size: 10px;
	text-align: center;
`;
export const CardTextBold = styled.Text`
	color: ${colors.quaternary};
	font-size: 12px;
	text-align: center;
	font-weight: bolder;
`;

export const ProductImage = styled.Image`
	width: 134px;
	height: 87px;
	align-self: center;
	margin-top: 5px;
	border-radius: 5px;
`;

export const IconsGroup = styled.View`
	width: 145px;
	flex-direction: row;
	justify-content: center;
	gap: 20px;
`;

export const CardGroup = styled.View`
	align-self: center;
	margin: 145px 0px 100px 0px;
	height: 500px;
`;

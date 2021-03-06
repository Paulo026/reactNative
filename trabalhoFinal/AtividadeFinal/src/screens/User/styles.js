import styled from "styled-components/native";
import colors from "../../Theme/colors";

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	background-color: ${colors.tertiary};
	align-items: center;
	padding: 50px;
`;

export const Logo = styled.Image`
	width: 100px;
	height: 100px;
	border-radius: 50%;
`;

export const Title = styled.Text`
	position: absolute;
	margin-bottom: 555px;
	font-size: 18px;
	color: ${colors.quaternary};
	font-weight: 800;
	line-height: 22px;
`;

export const Imagem = styled.View`
	flex-direction: row;
	gap: 30px;
	margin-left: 43px;
	margin-right: 5px;	
`;
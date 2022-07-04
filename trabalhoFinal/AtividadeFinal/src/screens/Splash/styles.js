import styled from "styled-components/native";
import colors from "../../Theme/colors";

export const Container = styled.View`
	flex: 1;
	justify-content: center;
	background-color: ${colors.quaternary};
	align-items: center;
	padding: 40px;
`;

export const Logo = styled.Image`
	width: 360px;
	height: 200px;
`;

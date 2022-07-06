import styled from "styled-components/native";
import colors from "../../theme/colors";

export const Container = styled.View`
	width: 360px;
	height: 54px;
	background-color: ${colors.septernary};
	z-index: 1;
	position: absolute;
	bottom: 0;
`;

export const WrapperNavBar = styled.View`
	width: 360px;
	/* background-color: rgba(209, 209, 209, 0.50); */
	opacity: 1;
	height: 32px;
	width: 32px;
	flex-direction: row;
	gap: 60px;
	margin-top: 11px;
	margin-bottom: 11px;
	justify-content: center;
	align-self: center;
`;

export default WrapperNavBar;

//Verificar se está correto

import styled from "styled-components/native";
import colors from "../../Theme/colors";


export const InputContainer = styled.TextInput`
	height: 30px;
	width: 210px;
	background-color: ${colors.tertiary};
	border: 2px solid ${colors.primary};
	border-radius: 15px;
	text-align: center;
`;

export const WrapperInputEye = styled.View`
	flex-direction: row;
`;


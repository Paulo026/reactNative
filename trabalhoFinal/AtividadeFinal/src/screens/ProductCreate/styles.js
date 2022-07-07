import styled from "styled-components/native";
import colors from "../../Theme/colors";


export const Container = styled.View`
	flex: 1;
	justify-content: center;
	background-color: ${colors.tertiary};
	align-items: center;
	padding: 40px;
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
	text-align: center;
`;

export const WrapperTextInfo = styled.TouchableWithoutFeedback`
	padding: 10px;
`;

export const TextInfo = styled.Text`
	color: ${colors.quaternary};
	font-size: 10px;
	font-weight: 700;
	line-height: 12px;
	padding: 10px;
`;

export const SpacingHeight = styled.View`
	width: 100%;
	height: ${(props) => props.height || 5};
`;

export const TextLink = styled.Text`
	color: ${colors.quaternary};
	font-size: 10px;
	font-weight: 700;
	line-height: 12px;
	padding: 10px;
	font-family: "Roboto";
`;

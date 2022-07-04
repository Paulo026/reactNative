import styled from "styled-components/native";
import colors from "../../Theme/colors";
import { TextInfo } from "./styles";

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
	color: ${colors.tertiary};
	font-weight: 800;
	line-height: 22px;
`;

export const SubTitle = styled.Text`
	width: 300px;
	font-size: 15px;
	color: ${colors.tertiary};
	font-weight: bolder;
	line-height: 22px;
	text-align: center;
`;

export const TextSimple = styled.Text`
	width: 300px;
	font-size: 10px;
	color: ${colors.tertiary};
	font-weight: bolder;
	line-height: 10px;
	text-align: center;
`;

export const WrapperTextInfo = styled.TouchableWithoutFeedback`
	padding: 10px;
`;

export const ImagesGroup = styled.View`
	width: 360px;
	height: 100px;
	/* padding: 50px; */
	align-content: center;
	flex-direction: row;
	justify-content: center;
`;
export const IconsGroup = styled.View`
	width: 360px;
	margin-left: 435px;
	flex-direction: row;
`;

// export const TextInfo = styled.TouchableOpacity`
// 	color: ${colors.secondary};
// 	font-size: 10px;
// 	font-weight: 700;
// 	line-height: 12px;
// 	padding: 10px;
// 	font-family: "Roboto";
// `;

export const TextLink = styled.Text`
	color: ${colors.secondary};
	font-size: 10px;
	font-weight: 700;
	line-height: 12px;
	padding: 10px;
	font-family: "Roboto";
`;

export const SpacingHeight = styled.View`
	width: 100%;
	height: ${(props) => props.height || 5};
`;

export const CategoryLarge = styled.Image`
	border-radius: 5px;
	height: 100px;
	width: 155px;
	border: 1px solid ${colors.tertiary};
	margin-left: 10px;
	margin-right: 10px;
`;

export const CategoryMedium = styled.Image`
	border-radius: 5px;
	height: 73px;
	width: 60px;
	opacity: 0.8;
	margin-top: 25px;
`;

export const PeopleWrapper = styled.View`
	width: 360px;
	height: 60px;
	flex-direction: row;
	gap: 10px;
	justify-content: center;
`;

export const InfoWrapper = styled.View`
	flex-direction: row;
	gap: 20px;
	justify-content: center;
`;

export const TextImage = styled.Text`
	color: ${colors.tertiary};
`;

export const People = styled.Image`
	border: 2px solid ${colors.secondary};
	border-radius: 50%;
	width: 55px;
	height: 55px;
`;

export const InfoWrapper2 = styled.View`
	flex-direction: row;
	gap: 90px;
	justify-content: center;
`;

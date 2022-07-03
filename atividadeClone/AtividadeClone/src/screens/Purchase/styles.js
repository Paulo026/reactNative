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
	font-size: 15px;
	color: ${colors.secondary};
	font-weight: 800;
	line-height: 22px;
`;

export const Table = styled.View`
	display: flex;
	flex-direction: row;
	margin-bottom: 2%;
	justify-content: space-around;
	height: 20px;
`;

export const TableColumn = styled.View`
	display: flex;
	flex-direction: row;
	margin-bottom: 2%;
	justify-content: space-around;
`;

export const PurchaseWrapper = styled.View`
	width: 330px;
	height: 250px;
	background-color: ${colors.tertiary};
	border-radius: 10px;
	border: 2px solid ${colors.primary};
	margin-top: -30px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	padding-left: 10px;
`;

export const ButtonWrapper = styled.View`
	width: 300px;
	height: 40px;
	margin: 50px 10px 10px 10px;
	flex-direction: row;
	gap: 40px; // Usei o gap para separar os botoes
`;

export const ButtonPrimary = styled.View`
	box-sizing: border-box;
	height: 160px;
	width: 125px;
	background-color: ${colors.tertiary};
	border: 2px solid ${colors.primary};
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	align-self: center;
	margin-top: 20px;
	margin-left: 10px;
`;

export const TextButton = styled.Text`
	color: ${colors.secondary};
	align-self: center;
	position: absolute;
	font-size: 10px;
	font-weight: 800;
	font-style: bolder;
	line-height: 12px;
`;

export const TextInfo = styled.Text`
	font-size: 10px;
	color: ${colors.secondary};
	font-weight: 800;
	font-family: "sans-serif";
	padding-top: 5px;
	padding-right: 7px;
	margin-right: 13px;
	height: 50px;
	width: 70px;
	text-align: left;
`;

export const TextQuantity = styled.Text`
	font-size: 10px;
	color: ${colors.secondary};
	font-weight: 800;
	font-family: "sans-serif";
	padding-top: 5px;
	padding-right: -12px;
	margin-right: 13px;
	margin-left: 12px;
	height: 50px;
	width: 5px;
	text-align: center;
`;

export const QuantityItem = styled.View`
	flex-direction: row;
	justify-content: center;
	width: 30px;
	margin-right: 50px;
	gap: 5px;
	
`;

// Verificar tamanho da letra fontSize

export const SpacingHeight = styled.View`
	width: 100%;
	height: ${(props) => props.height || 5};
`;

export const TitleWrapper = styled.View`
	justify-content: center;
	flex-direction: row;
`;

export const SubTitleWrapper = styled.View`
	flex-direction: row;
	justify-content: left;
`;

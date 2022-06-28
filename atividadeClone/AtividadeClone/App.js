import React from "react";
import { View } from "react-native";
import { Container, Alterar, ButtonText, PressableAlterar, Logo, Title } from "./styles";
import logo from "./assets/logo.png";


const AlterarSenha = () => {
	return (
		<Container colors={["#0ff", "white", "#0ff"]}>
			<Alterar>
			<Logo source={logo} />
				<Title>Senha alterada com sucesso!</Title>
				<View style={{ marginTop: 5 }}>
					<PressableAlterar>
						<ButtonText>login</ButtonText>
					</PressableAlterar>
				</View>
			</Alterar>
		</Container>
	);
};

export default AlterarSenha;

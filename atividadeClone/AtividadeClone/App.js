import React from "react";
import { View } from "react-native";
import { Container, Alterar, ButtonText, PressableAlterar, Logo, Title } from "./styles";

const AlterarSenha = () => {
	return (
		<Container>
			<Alterar>
			<Logo />
				<Title>Senha alterada com sucesso</Title>
				<View style={{ marginTop: 20 }}>
					<PressableAlterar>
						<ButtonText>login</ButtonText>
					</PressableAlterar>
				</View>
			</Alterar>
		</Container>
	);
};

export default AlterarSenha;

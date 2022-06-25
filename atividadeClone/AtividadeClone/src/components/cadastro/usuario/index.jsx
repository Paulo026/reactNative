import React from "react";
import {  View } from "react-native";
import { Container, ButtonText, Cadastro, PressableCadastro, Title, InnerText } from "./styles";


const Usuario = () => {
	return(
	<Container>
		<Cadastro>
			<Title>CADASTRO</Title>
			<View style={{ marginTop: 20 }}>
				<InnerText placeholder="Nome" />
				<InnerText placeholder="CPF" />
				<InnerText placeholder="Data de Nascimento" />
				<InnerText placeholder="Senha" />
				<InnerText placeholder="Confirmar senha" />
				<PressableCadastro>
					<ButtonText>CADASTRAR</ButtonText>
				</PressableCadastro>
			</View>
		</Cadastro>
	</Container>
	);
};

export default Usuario;


//FALTA IMAGEM E BOTÃO DE VOLTAR

import React from 'react';
import { View } from 'react-native';
import {  Container, ButtonText, Cadastro, PressableCadastro, Title, InnerText } from "./styles";

// import { Container } from './styles';

const CadastroCategoria = () => {
  return (
    <Container>
		<Cadastro>
			<Title>Cadrasto de Categoria </Title>
			<View style={{ marginTop: 20 }}>
				<InnerText placeholder="Nome" />
				<InnerText placeholder="Imagem" />
				<PressableCadastro>
					<ButtonText>CADASTRAR</ButtonText>
				</PressableCadastro>
			</View>
		</Cadastro>
	</Container>
  );
};

export default CadastroCategoria;


// Selecionar imagem abaixo do botão cadastrar
// pesquisar elevation
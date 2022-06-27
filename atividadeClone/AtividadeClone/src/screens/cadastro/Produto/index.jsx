import React from 'react';
import { View } from 'react-native';
import {  Container, ButtonText, CadastroPrd, PressableCdProduto, Title, InnerText, ViewImagem } from "./styles";


const CadastroProduto = () => {
  return (
    <Container>
		<CadastroPrd>		
			<Title >Cadrasto de Produto </Title>
			<View style={{ marginTop: 20 }}>
				<InnerText placeholder="Nome" />
				<InnerText placeholder="Preço R$" />
				<InnerText placeholder="Quantidade em estoque" />
				<InnerText placeholder="Imagem" />
				<ViewImagem>
				Selecionar imagem.
				</ViewImagem>
				<PressableCdProduto>
					<ButtonText>CADASTRAR</ButtonText>
				</PressableCdProduto>
			</View>
		</CadastroPrd>
	</Container>
  );
};

export default CadastroProduto;
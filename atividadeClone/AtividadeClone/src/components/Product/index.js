import React from "react";
import { View, FlatList, Image } from "react-native";
import Gradient from "../../components/Gradient";
import { Container, Title } from "../../screens/Marketplace/styles";
import SmallLogo from "../../components/SmallLogo";
import ExitButton from "../../components/ExitButton";
import NavBar from "../../components/NavBar";
import { CardWrapper, CardText, ProductImage, CardBotton } from "../CustomBoxCard/styles";
import { FontAwesome5 } from '@expo/vector-icons';


const Card = [
	{
		id: "1",
		imagem: require("../../../assets/1.jpg"),
		nome: "Produto 1",
		preco: "Preço R$ 25,00",
		estoque: "10 unidades em estoque",
		quantidade: "2",
	},

	{
		id: "2",
		imagem: require("../../../assets/2.png"),
		nome: "Produto 2",
		preco: "Preço R$ 50,00",
		estoque: "1 unidade  em estoque",
		quantidade: "0",
	},

	{
		id: "3",
		imagem: require("../../../assets/3.jpg"),
		nome: "Produto 3",
		preco: "Preço R$ 30,00",
		estoque: "5 Unidades em estoque",
		quantidade: "0",
	},

	{
		id: "4",
		imagem: require("../../../assets/4.jpg"),
		nome: "Produto 4",
		preco: "Preço R$ 100,00",
		estoque: "15 Unidades em estoque",
		quantidade: "1",
	},

	{
		id: "5",
		imagem: require("../../../assets/5.jpg"),
		nome: "Produto 5",
		preco: "Preço R$ 40,00",
		estoque: "20 Unidades em estoque",
		quantidade: "1",
	},

	{
		id: "6",
		imagem: require("../../../assets/6.jpg"),
		nome: "Produto 6",
		preco: "Preço R$ 70,00",
		estoque: "8 Unidades em estoque",
		quantidade: "0",
	},
];

const ListCard = ({ imagem, nome, preco, estoque, quantidade }) => (
	<CardWrapper>
		<ProductImage source={imagem} />

		<CardText>{nome}</CardText>

		<CardText>{preco}</CardText>

		<CardText>{estoque}</CardText>
		<CardBotton>
			<View>
		<CardText>{quantidade}</CardText>
			</View>
		</CardBotton>
	</CardWrapper>
);

const Product = () => {
	const list = ({ item }) => (
		<ListCard
			imagem={item.imagem}
			nome={item.nome}
			preco={item.preco}
			estoque={item.estoque}
			quantidade={item.quantidade}
		/>
	);
	return (
		<Container>
			<Gradient position="top" />
			<Title>Produtos</Title>
			<ExitButton />
			<SmallLogo />
			<View>
				<FlatList
					data={Card}
					renderItem={list}
					keyExtractor={(item) => item.id}
					numColumns={2}
				/>
			</View>
			<NavBar /> 
			<Gradient position="bottom" />
		</Container>
	);
};

export default Product;

import React from "react";
import { View, FlatList, Image } from "react-native";
import Gradient from "../../components/Gradient";
import { Container, Title } from "../../screens/Marketplace/styles";
import SmallLogo from "../../components/SmallLogo";
import ExitButton from "../../components/ExitButton";
import NavBar from "../../components/NavBar";
import { CardWrapper, CardText, ProductImage, CardBotton, NumberButtonOne, NumberButtonPlus } from "../CustomBoxCard/styles";
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Card = [
	{
		id: "1",
		imagem: require("../../../assets/1.jpg"),
		nome: "Produto 1",
		preco: "Preço R$ 25,00",
		estoque: "10 unidades em estoque",
		quantidade: "2",
		estrela: EstrelaVazia,
	},

	{
		id: "2",
		imagem: require("../../../assets/2.png"),
		nome: "Produto 2",
		preco: "Preço R$ 50,00",
		estoque: "1 unidade  em estoque",
		quantidade: "0",
		estrela:EstrelaCheia,
	},

	{
		id: "3",
		imagem: require("../../../assets/3.jpg"),
		nome: "Produto 3",
		preco: "Preço R$ 30,00",
		estoque: "5 Unidades em estoque",
		quantidade: "0",
		estrela: EstrelaVazia,
	},

	{
		id: "4",
		imagem: require("../../../assets/4.jpg"),
		nome: "Produto 4",
		preco: "Preço R$ 100,00",
		estoque: "15 Unidades em estoque",
		quantidade: "1",
		estrela: EstrelaVazia,
	},

	{
		id: "5",
		imagem: require("../../../assets/5.jpg"),
		nome: "Produto 5",
		preco: "Preço R$ 40,00",
		estoque: "20 Unidades em estoque",
		quantidade: "1",
		estrela: EstrelaCheia,
	},

	{
		id: "6",
		imagem: require("../../../assets/6.jpg"),
		nome: "Produto 6",
		preco: "Preço R$ 70,00",
		estoque: "8 Unidades em estoque",
		quantidade: "0",
		estrela:EstrelaCheia,
	},
];
const EstrelaCheia = () => {
	return(
		<AntDesign name="star" size={24} color="black" />
	)
};

const EstrelaVazia = () => {
	return(
		<AntDesign name="staro" size={24} color="black" />
	)
};

const ListCard = ({ imagem, nome, preco, estoque, quantidade, estrela }) => (
	<CardWrapper>
		<ProductImage source={imagem} />

		<CardText>{nome}</CardText>

		<CardText>{preco}</CardText>

		<CardText>{estoque}</CardText>
		<CardBotton>
			<NumberButtonPlus><Entypo name="minus" size={10} color="black" /></NumberButtonPlus>
			<NumberButtonOne>
		<CardText>{quantidade}</CardText>
			</NumberButtonOne>
			<NumberButtonPlus><AntDesign name="plus" size={10} color="black" /></NumberButtonPlus>
			<MaterialCommunityIcons name="check-bold" size={18} color="black" style={{marginLeft:15}}/>
			<View>
			{estrela} 
			</View>
			{/* style={{marginRight:10}}/> */}
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
			estrela={item.estrela}
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

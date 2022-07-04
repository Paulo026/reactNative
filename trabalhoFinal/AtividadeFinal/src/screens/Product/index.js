import React from "react";
import { View, FlatList, Image } from "react-native";
import Gradient from "../../components/Gradient";
import { Container, Title } from "../../screens/AboutUs/styles";
import SmallLogo from "../../components/SmallLogo";
import ExitButton from "../../components/ExitButton";
import NavBar from "../../components/NavBar";
import {
	CardWrapper,
	CardText,
	CardGroup,
	CardTextBold,
	ProductImage,
	CardBotton,
	IconsGroup,
} from "../../components/CustomBoxCard/styles";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../theme/colors";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Card = [
	{
		id: "1",
		imagem: require("../../../assets/1.jpg"),
		nome: "Produto 1",
		descricao: "Descrição 1",
		preco: "Preço R$ 25,00",
		estoque: "10 unidades em estoque",
		quantidade: "2",
	},

	{
		id: "2",
		imagem: require("../../../assets/2.png"),
		nome: "Produto 2",
		descricao: "Descrição 2",
		preco: "Preço R$ 50,00",
		estoque: "1 unidade  em estoque",
		quantidade: "0",
	},

	{
		id: "3",
		imagem: require("../../../assets/3.jpg"),
		nome: "Produto 3",
		descricao: "Descrição 3",
		preco: "Preço R$ 30,00",
		estoque: "5 Unidades em estoque",
		quantidade: "0",
	},

	{
		id: "4",
		imagem: require("../../../assets/4.jpg"),
		nome: "Produto 4",
		descricao: "Descrição 4",
		preco: "Preço R$ 100,00",
		estoque: "15 Unidades em estoque",
		quantidade: "1",
	},

	{
		id: "5",
		imagem: require("../../../assets/5.jpg"),
		nome: "Produto 5",
		descricao: "Descrição 5",
		preco: "Preço R$ 40,00",
		estoque: "20 Unidades em estoque",
		quantidade: "1",
	},

	{
		id: "6",
		imagem: require("../../../assets/6.jpg"),
		nome: "Produto 6",
		descricao: "Descrição 6",
		preco: "Preço R$ 70,00",
		estoque: "8 Unidades em estoque",
		quantidade: "0",
	},
	{
		id: "7",
		imagem: require("../../../assets/6.jpg"),
		nome: "Produto 7",
		descricao: "Descrição 7",
		preco: "Preço R$ 70,00",
		estoque: "8 Unidades em estoque",
		quantidade: "0",
	},
	{
		id: "8",
		imagem: require("../../../assets/6.jpg"),
		nome: "Produto 8",
		descricao: "Descrição 8",
		preco: "Preço R$ 70,00",
		estoque: "8 Unidades em estoque",
		quantidade: "0",
	},
];

const ListCard = ({ imagem, nome, preco, estoque, quantidade, descricao }) => {
	const navigation = useNavigation();

	function openProductChange() {
		if (nome === "Produto 1") {
			navigation.navigate("Alterar Produto");
		}
	}

	return (
		<CardWrapper>
			<CardTextBold>{nome}</CardTextBold>
			<ProductImage source={imagem} />
			<CardTextBold>{preco}</CardTextBold>
			<CardText>{estoque}</CardText>
			<CardText>{descricao}</CardText>
			<CardBotton>
				<IconsGroup>
					<Feather name="trash" size={12} color={`${colors.quinternary}`} />
					<Feather
						name="edit-3"
						size={12}
						color={`${colors.secondary}`}
						onPress={openProductChange}
					/>
				</IconsGroup>
			</CardBotton>
		</CardWrapper>
	);
};

const Product = () => {
	const list = ({ item }) => (
		<ListCard
			imagem={item.imagem}
			nome={item.nome}
			descricao={item.descricao}
			preco={item.preco}
			estoque={item.estoque}
			quantidade={item.quantidade}
		/>
	);

	const navigation = useNavigation();

	function openProductCreate() {
		navigation.navigate("Cadastro de Produto");
	}

	function openProductChange() {
		navigation.navigate("Alterar Produto");
	}
	return (
		<Container>
			<Gradient position="top" />
			<Title>Produtos</Title>
			<ExitButton />
			<SmallLogo />
			<Ionicons
				name="add"
				size={20}
				color={`${colors.tertiary}`}
				style={{ position: "absolute", top: "75px", left: "22px" }}
				onPress={openProductCreate}
			/>
			<CardGroup>
				<FlatList
					data={Card}
					renderItem={list}
					keyExtractor={(item) => item.id}
					numColumns={2}
				/>
			</CardGroup>
			<NavBar />
			<Gradient position="bottom" />
		</Container>
	);
};

export default Product;

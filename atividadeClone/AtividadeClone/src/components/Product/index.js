import React from "react";
import { View, FlatList, Image } from "react-native";
import Gradient from "../../components/Gradient";
import { Container, Title } from "../../screens/Marketplace/styles";
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
	NumberButtonOne,
	NumberButtonPlus,
	IconsGroup,
} from "../CustomBoxCard/styles";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../theme/colors";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Card = [
	{
		id: "1",
		imagem: require("../../../assets/1.jpg"),
		nome: "Produto 1",
		preco: "Preço R$ 25,00",
		estoque: "10 unidades em estoque",
		quantidade: "2",
		estrela: <AntDesign name="staro" size={18} color="#120a8f" />,
	},

	{
		id: "2",
		imagem: require("../../../assets/2.png"),
		nome: "Produto 2",
		preco: "Preço R$ 50,00",
		estoque: "1 unidade  em estoque",
		quantidade: "0",
		estrela: <AntDesign name="star" size={18} color="#120a8f" />,
	},

	{
		id: "3",
		imagem: require("../../../assets/3.jpg"),
		nome: "Produto 3",
		preco: "Preço R$ 30,00",
		estoque: "5 Unidades em estoque",
		quantidade: "0",
		estrela: <AntDesign name="staro" size={18} color="#120a8f" />,
	},

	{
		id: "4",
		imagem: require("../../../assets/4.jpg"),
		nome: "Produto 4",
		preco: "Preço R$ 100,00",
		estoque: "15 Unidades em estoque",
		quantidade: "1",
		estrela: <AntDesign name="staro" size={18} color="#120a8f" />,
	},

	{
		id: "5",
		imagem: require("../../../assets/5.jpg"),
		nome: "Produto 5",
		preco: "Preço R$ 40,00",
		estoque: "20 Unidades em estoque",
		quantidade: "1",
		estrela: <AntDesign name="star" size={18} color="#120a8f" />,
	},

	{
		id: "6",
		imagem: require("../../../assets/6.jpg"),
		nome: "Produto 6",
		preco: "Preço R$ 70,00",
		estoque: "8 Unidades em estoque",
		quantidade: "0",
		estrela: <AntDesign name="star" size={18} color="#120a8f" />,
	},
];

const ListCard = ({ imagem, nome, preco, estoque, quantidade, estrela }) => (
	<CardWrapper>
		<ProductImage source={imagem} />
		<CardTextBold>{nome}</CardTextBold>
		<CardTextBold>{preco}</CardTextBold>
		<CardText>{estoque}</CardText>
		<CardBotton>
			<NumberButtonPlus>
				<Entypo name="minus" size={10} color="black" />
			</NumberButtonPlus>
			<NumberButtonOne>
				<CardText>{quantidade}</CardText>
			</NumberButtonOne>
			<NumberButtonPlus>
				<AntDesign name="plus" size={10} color="black" />
			</NumberButtonPlus>
			<MaterialCommunityIcons
				name="check-bold"
				size={18}
				color="#120a8f"
				style={{ marginLeft: 15 }}
			/>
			{estrela}
		</CardBotton>
		<IconsGroup>
			<Feather name="trash" size={12} color={`${colors.quinternary}`} />
			<Feather name="edit-3" size={12} color={`${colors.secondary}`} />
		</IconsGroup>
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
			<Ionicons
				name="add"
				size={18}
				color={`${colors.secondary}`}
				style={{ marginRight: 280, marginTop: -50 }}
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

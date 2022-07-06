import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Container, Title } from "../../screens/AboutUs/styles";
import Gradient from "../../components/Gradient";
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
import api from "../../service/api";
import colors from "../../theme/colors";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ListCard = ({ name, description, quantity, price, image }) => {
	const navigation = useNavigation();

	function openProductChange() {
		if (name === "Produto 1") {
			navigation.navigate("Alterar Produto");
		}
	}

	function openProductDelete() {
		if (name === "Produto 2") {
			navigation.navigate("Deletar Produto");
		}
	}
	const priceFormated = price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

	return (
		<CardWrapper style={{height:200}}>
			<CardTextBold>{name}</CardTextBold>
			<ProductImage source={{ uri: image }} />
			<CardTextBold>Preço: {priceFormated}</CardTextBold>
			<CardText>Estoque: {quantity} unidades</CardText>
			<CardText>{description}</CardText>
			<CardBotton>
				<IconsGroup>
					<Feather
						name="trash"
						size={12}
						color={`${colors.quinternary}`}
						onPress={openProductDelete}
					/>
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
	const [product, setProduct] = useState([]);

	useEffect(() => {
		api.get("/produto").then((response) => {
			setProduct(response.data);
		});
	}, []);

	const renderProduct = ({ item }) => (
		<ListCard
			name={item.nome}
			description={item.descricao}
			quantity={item.qtdEstoque}
			price={item.preco}
			image={item.foto}
		/>
	);

	const navigation = useNavigation();

	function openProductCreate() {
		navigation.navigate("Cadastro de Produto");
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
					data={product}
					renderItem={renderProduct}
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

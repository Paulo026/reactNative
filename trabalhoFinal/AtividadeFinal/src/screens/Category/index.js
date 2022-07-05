import React from "react";
import { FlatList } from "react-native";
import Gradient from "../../components/Gradient";
import { Container, Title } from "../../screens/Category/styles";
import SmallLogo from "../../components/SmallLogo";
import ExitButton from "../../components/ExitButton";
import NavBar from "../../components/NavBar";
import {
	CardWrapper,
	CardGroup,
	CardTextBold,
	ProductImage,
	CardBotton,
	IconsGroup,
} from "../../components/CustomBoxCard/styles";
import colors from "../../theme/colors";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Card = [
	{
		id: "1",
		foto: "https://imagenspng.com/wp-content/uploads/imagem-da-minnie-vermelha-em-png-1448x2048.png",
		nome: "Categoria 1",
	},

	{
		id: "2",
		foto: "https://www.seekpng.com/png/detail/12-129046_like-imagem-de-fundo-png-like.png",
		nome: "Categoria 2",
	},

	{
		id: "3",
		foto: "https://toppng.com/uploads/preview/mickey-mouse-mickey-11563574299xftcehblfk.png",
		nome: "Categoria 3",
	},

	{
		id: "4",
		foto: require("../../../assets/4.jpg"),
		nome: "Categoria 4",
	},

	{
		id: "5",
		foto: require("../../../assets/5.jpg"),
		nome: "Categoria 5",
	},

	{
		id: "6",
		foto: require("../../../assets/6.jpg"),
		nome: "Categoria 6",
	},
	{
		id: "7",
		foto: require("../../../assets/6.jpg"),
		nome: "Categoria 7",
	},
	{
		id: "8",
		foto: require("../../../assets/6.jpg"),
		nome: "Categoria 8",
	},
];

const ListCard = ({ foto, nome }) => {
	const navigation = useNavigation();

	function openProductChange() {
		if (nome === "Categoria 1") {
			navigation.navigate("Alterar Categoria");
		}
	}

	return (
		<CardWrapper>
			<ProductImage source={foto} />
			<CardTextBold>{nome}</CardTextBold>
			<CardBotton>
				<IconsGroup>
					<Feather name="trash" size={20} color={`${colors.quinternary}`} />
					<Feather
						name="edit-3"
						size={20}
						color={`${colors.secondary}`}
						onPress={openProductChange}
					/>
				</IconsGroup>
			</CardBotton>
		</CardWrapper>
	);
};

const Category = () => {
	const list = ({ item }) => <ListCard foto={item.foto} nome={item.nome} />;

	const navigation = useNavigation();

	function openProductCreate() {
		navigation.navigate("Cadastro de Categoria");
	}

	function openProductChange() {
		navigation.navigate("Alterar Categoria");
	}
	return (
		<Container>
			<Gradient position="top" />
			<Title>Categorias</Title>
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

export default Category;

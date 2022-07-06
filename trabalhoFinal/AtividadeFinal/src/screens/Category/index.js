import React, { useEffect, useState } from "react";
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
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { getCategoryApi } from './../../service/Category/index';



const ListCard = ({ image, name }) => {
	const navigation = useNavigation();

	function openCategoryChange() {
		if (nome === "Categoria 1") {
			navigation.navigate("Alterar Categoria");
		}
	}

	function openCategoryDelete() {
		if (nome === "Categoria 2") {
			navigation.navigate("Deletar Categoria");
		}
	}

	return (
		<CardWrapper>
			<ProductImage source={{ uri: image }} />
			<CardTextBold>{name}</CardTextBold>
			<CardBotton>
				<IconsGroup >
					<Feather 
						name="trash"
						size={20}
						color={`${colors.quinternary}`}
						onPress={openCategoryDelete}
					/>
					<Feather
						name="edit-3"
						size={20}
						color={`${colors.secondary}`}
						onPress={openCategoryChange}
					/>
				</IconsGroup>
			</CardBotton>
		</CardWrapper>
	);
};

const Category = () => {
	const [category, setCategory] = useState([]);

	useEffect(() => {
		getCategoryApi().then((response) => {
			setCategory(response)
		});
	}, []);

	const renderCategory = ({ item }) => <ListCard name={item.nome} image={item.foto} />;

	const navigation = useNavigation();

	function openCategoryCreate() {
		navigation.navigate("Cadastro de Categoria");
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
				onPress={openCategoryCreate}
			/>
			<CardGroup>
				<FlatList
					data={category}
					renderItem={renderCategory}
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

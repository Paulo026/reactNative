import React, { useState } from "react";
import { Container, Title, SpacingHeight } from "./styles";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import Input from "../../components/Input";
import Gradient from "../../components/Gradient";
import ExitButton from "../../components/ExitButton";
import spacings from "../../Theme/spacings";
import { useNavigation } from "@react-navigation/native";
import SmallLogo from "../../components/SmallLogo/index";
import api from "../../service/api";

const CategoryCreate = () => {
	const navigation = useNavigation();
	const [categoryName, setCategoryName] = useState("");
	const [categoryImage, setCategoryImage] = useState("");

	function createCategory() {
		api.post(`/categoria`, {
			nome: categoryName,
			foto: categoryImage,
		}).then((response) => response.data);
		console.log(categoryName);
		navigation.navigate("Sobre Nós");
	}

	return (
		<Container>
			<Gradient position="top" />
			<ExitButton />
			<SmallLogo />
			<SpacingHeight height={spacings.extraLarge} />
			<Title>Cadastro{"\n"}de Categoria</Title>
			<Input placeholder={"Nome"} onChangeText={(text) => setCategoryName(text)} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Link da Imagem"} onChangeText={(text) => setCategoryImage(text)} />
			<SpacingHeight height={spacings.extraLarge} />
			<ButtonPrimary>
				<TextButton onPress={createCategory}>CADASTRAR</TextButton>
			</ButtonPrimary>
			<Gradient position="bottom" />
		</Container>
	);
};

export default CategoryCreate;

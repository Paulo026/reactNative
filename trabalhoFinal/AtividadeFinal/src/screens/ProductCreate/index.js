import React, { useState } from "react";
import { Container, Title, SpacingHeight } from "./styles";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import Input from "../../components/Input";
import spacings from "../../Theme/spacings";
import Gradient from "../../components/Gradient";
import { useNavigation } from "@react-navigation/native";
import ExitButton from "../../components/ExitButton";
import SmallLogo from "../../components/SmallLogo";
import api from "../../service/api";

const ProductCreate = () => {
	const navigation = useNavigation();
	const [productName, setProductName] = useState("");
	const [productDescription, setProductDescription] = useState("");
	const [productPrice, setProductPrice] = useState("");
	const [productQuantity, setProductQuantity] = useState("");
	const [productImage, setProductImage] = useState("");
	const [productCategory, setProductCategory] = useState("");

	function createProduct() {
		api.post("/produto", {
			nome: productName,
			descricao: productDescription,
			qtdEstoque: productQuantity,
			preco: productPrice,
			foto: productImage,
			categoria: productCategory,
		}).then((response) => response.data);
		navigation.navigate("Sobre Nõs")
	}

	return (
		<Container>
			<Gradient position="top" />
			<ExitButton />
			<SmallLogo />
			<Title>
				Cadastro
				<br />
				de Produto
			</Title>
			<Input placeholder={"Nome" onChangeText={(text) => setCategoryName(text)} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Descrição"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Preço R$"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Quantidade em estoque"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Link da Imagem"} />
			<SpacingHeight height={spacings.extraLarge} />
			<ButtonPrimary onPress={openScreen}>
				<TextButton>CADASTRAR</TextButton>
			</ButtonPrimary>
			<Gradient position="bottom" />
		</Container>
	);
};

export default ProductCreate;

import React from "react";
import { FlatList } from "react-native";
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
import colors from "../../theme/colors";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import { Imagem } from "./styles";

const Card = [
	{
		id: "1",
		nome: "Usuário 1",
		cpf: "CPF 1",
		nascimento: "Nascimento 1",
		login: "login1",
		ativo: true,
		senha: "123456",
		imagem: require("../../../assets/1.jpg"),
	},

	{
		id: "2",
		nome: "Usuário 2",
		cpf: "CPF 2",
		nascimento: "Nascimento 2",
		login: "login2",
		ativo: true,
		senha: "123456",
		imagem: require("../../../assets/2.png"),
	},

	{
		id: "3",
		nome: "Usuário 3",
		cpf: "CPF 3",
		nascimento: "Nascimento 3",
		login: "login3",
		ativo: false,
		senha: "123456",
		imagem: require("../../../assets/3.jpg"),
	},

	{
		id: "4",
		nome: "Usuário 4",
		cpf: "CPF 4",
		nascimento: "Nascimento 4",
		login: "login4",
		ativo: true,
		senha: "123456",
		imagem: require("../../../assets/4.jpg"),
	},

	{
		id: "5",
		nome: "Usuário 5",
		cpf: "CPF 5",
		nascimento: "Nascimento 5",
		login: "login5",
		ativo: true,
		senha: "123456",
		imagem: require("../../../assets/5.jpg"),
	},

	{
		id: "6",
		nome: "Usuário 6",
		cpf: "CPF 6",
		nascimento: "Nascimento 6",
		login: "login6",
		ativo: true,
		senha: "123456",
		imagem: require("../../../assets/6.jpg"),
	},
	{
		id: "7",
		nome: "Usuário 7",
		cpf: "CPF 7",
		nascimento: "Nascimento 7",
		login: "login7",
		ativo: true,
		senha: "123456",
		imagem: require("../../../assets/1.jpg"),
	},
	{
		id: "8",
		nome: "Usuário 8",
		cpf: "CPF 8",
		nascimento: "Nascimento 8",
		login: "login8",
		ativo: true,
		senha: "123456",
		imagem: require("../../../assets/2.png"),
	},
];

const ListCard = ({ nome, cpf, nascimento, login, imagem }) => {
	const navigation = useNavigation();

	function openUserChange() {
		if (nome === "Usuário 1") {
			navigation.navigate("Alterar Usuário");
		}
	}

	return (
		<CardWrapper>
			<Imagem>
			<CardTextBold>{nome}</CardTextBold>
			<AntDesign name="checkcircle" size={13} color="black" style={{paddingTop:3}} />
			</Imagem>			
			<ProductImage source={imagem} />			
			<CardText>{cpf}</CardText>
			<CardText>{nascimento}</CardText>
			<CardText>{login}</CardText>
			<CardBotton>
				<IconsGroup>
					<Feather name="trash" size={12} color={`${colors.quinternary}`} />
					<Feather
						name="edit-3"
						size={12}
						color={`${colors.secondary}`}
						onPress={openUserChange}
					/>
				</IconsGroup>
			</CardBotton>
		</CardWrapper>
	);
};

const User = () => {
	const list = ({ item }) => (
		<ListCard
			nome={item.nome}
			cpf={item.cpf}
			nascimento={item.nascimento}
			login={item.login}
			ativo={item.ativo}
			senha={item.senha}
			imagem={item.imagem}
		/>
	);

	const navigation = useNavigation();

	function openUserCreate() {
		navigation.navigate("Cadastro de Usuário");
	}

	function openUserChange() {
		navigation.navigate("Alterar Usuário");
	}
	return (
		<Container>
			<Gradient position="top" />
			<Title>Usuários</Title>
			<ExitButton />
			<SmallLogo />
			<Ionicons
				name="add"
				size={20}
				color={`${colors.tertiary}`}
				style={{ position: "absolute", top: "75px", left: "22px" }}
				onPress={openUserCreate}
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

export default User;

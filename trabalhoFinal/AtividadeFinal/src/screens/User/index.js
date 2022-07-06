import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
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
import api from './../../service/api';


const ListCard = ({ nome, cpf, nascimento, login, foto, ativo }) => {
	const navigation = useNavigation();

	function openUserChange() {
		if (nome === "Usuário 1") {
			navigation.navigate("Alterar Usuário");
		}
	}
	const checked = (<AntDesign name="checkcircle" size={13} color="black" style={{paddingTop:3}}/>);
	const unChecked = (<AntDesign name="checkcircleo" size={13} color="black" style={{paddingTop:3}}/>);
	const IsChecked = () => {if (ativo === true)  {
		return checked
	} else {
		return unChecked
	}
	};
	return (
		<CardWrapper>
			<Imagem>
				<View style={{width:50}}>
			<CardTextBold style={{whiteSpace:"nowrap"}}>{nome}</CardTextBold>
			</View>
			<IsChecked />
			</Imagem>			
			<ProductImage source={{uri:foto}} />			
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
	const [usuario, setUsuario] = useState ([]);

	useEffect(() => {
		api.get("/usuario").then((response) => {
			setUsuario(response.data);
		});
	}, []);

	const list = ({ item }) => (
		<ListCard
			nome={item.nome}
			cpf={item.cpf}
			nascimento={item.dtNascimento}
			login={item.login}
			ativo={item.ativo}
			senha={item.senha}
			foto={item.foto}
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
					data={usuario}
					renderItem={list}
					keyExtractor={(item) =>item.id}
					numColumns={2}
				/>
			</CardGroup>
			<NavBar />
			<Gradient position="bottom" />
		</Container>
	);
};

export default User;

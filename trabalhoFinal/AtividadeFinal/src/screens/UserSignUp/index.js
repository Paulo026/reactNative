import React, { useState } from "react";
import { Container, Title, SpacingHeight } from "../Login/styles";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import Input from "../../components/Input";
import InputEye from "../../components/InputEye";
import spacings from "../../Theme/spacings";
import Gradient from "../../components/Gradient";
import { useNavigation } from "@react-navigation/native";
import ExitButton from "../../components/ExitButton";
import SmallLogo from "../../components/SmallLogo";
import api from "../../service/api";

const UserSignUp = () => {
	const navigation = useNavigation();
	const [userActive, setUserActive] = useState(true);
	const [userBirthday, setUserBirthday] = useState("");
	const [userCPF, setUserCPF] = useState("");
	const [userLogin, setUserLogin] = useState("");
	const [userName, setUserName] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [userImage, setUserImage] = useState("");

	function createUser() {
		api.post(`/usuario`, {
			ativo: userActive,
			cpf: userCPF,
			dtNascimento: userBirthday,
			foto: userImage,
			login: userLogin,
			nome: userName,
			senha: userPassword,
		}).then((response) => response.data);
		console.log(userName);
		openScreen();
	}

	function openScreen() {
		navigation.navigate("Cadastro de Usuário feito com sucesso");
	}

	return (
		<Container>
			<Gradient position="top" />
			<ExitButton />
			<SmallLogo />
			<Title>Cadastro de Usuário</Title>
			<Input placeholder={"Nome"} onChangeText={(text) => setUserName(text)} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"CPF"} onChangeText={(text) => setUserCPF(text)} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input
				placeholder={"Data de Nascimento"}
				onChangeText={(text) => setUserBirthday(text)}
			/>
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Login"} onChangeText={(text) => setUserLogin(text)} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Link da Imagem"} onChangeText={(text) => setUserImage(text)} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input
				placeholder={"Ativo (true/false)"}
				onChangeText={(text) => setUserActive(text)}
			/>
			<SpacingHeight height={spacings.extraLarge} />
			<InputEye placeholder={"Senha"} onChangeText={(text) => setUserPassword(text)} />
			<SpacingHeight height={spacings.extraLarge} />
			<ButtonPrimary onPress={createUser}>
				<TextButton>CADASTRAR</TextButton>
			</ButtonPrimary>
			<ButtonPrimary onPress={console.log(userActive)}>
				<TextButton>checar</TextButton>
			</ButtonPrimary>
			<Gradient position="bottom" />
		</Container>
	);
};

export default UserSignUp;

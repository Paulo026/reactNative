import {
	Container,
	Logo,
	Title,
	TextInfo,
	SpacingHeight,
	WrapperTextInfo,
	TextLink,
} from "../Login/styles";
import face from "../../../assets/logo.jpeg";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import Input from "../../components/Input";
import InputEye from "../../components/InputEye";
import spacings from "../../Theme/spacings";
import Gradient from "../../components/Gradient";
import { useNavigation } from "@react-navigation/native";



const Login = () => {
	const navigation = useNavigation();

	function openScreen() {
		navigation.navigate("Recuperar Senha");
	}

	function openUserSignUp() {
		navigation.navigate("Cadastro de Usuário");
	}

	function openMarketplace() {
		navigation.navigate("Sobre Nós");
	}

	return (
		<Container>
			<Gradient position="top" />
			<Logo source={face} />
			<Title>Login</Title>
			<Input placeholder={"Digite seu login"} />
			<SpacingHeight height={spacings.extraLarge} />
			<InputEye placeholder={"Digite sua senha"} />
			<WrapperTextInfo>
				<TextInfo onPress={openScreen}>
					<TextLink>Esqueceu a sua senha? Clique aqui!</TextLink>
				</TextInfo>
			</WrapperTextInfo>
			<ButtonPrimary onPress={openMarketplace}>
				<TextButton>ENTRAR</TextButton>
			</ButtonPrimary>
			<WrapperTextInfo>
				<TextInfo onPress={openUserSignUp}>
					<TextLink>Não possui cadastro? Cadastre-se aqui.</TextLink>
				</TextInfo>
			</WrapperTextInfo>
			<Gradient position="bottom" />
		</Container>
	);
};

export default Login;

import {
	Container,
	Logo,
	Title,
	TextInfo,
	SpacingHeight,
	WrapperTextInfo,
	TextLink,
} from "../Login/styles";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import Input from "../../components/Input";
import InputEye from "../../components/InputEye";
import spacings from "../../Theme/spacings";
import Gradient from "../../components/Gradient";
import { useNavigation } from "@react-navigation/native";
import ExitButton from "../../components/ExitButton";
import SmallLogo from "../../components/SmallLogo";

const UserSignUp = () => {
	const navigation = useNavigation();

	function openScreen() {
		navigation.navigate("Cadastro de Usuário feito com sucesso");
	}

	return (
		<Container>
			<Gradient position="top" />
			<ExitButton />
			<SmallLogo />
			<Title>Cadastro de Usuário</Title>
			<Input placeholder={"Nome"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"CPF"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Data de Nascimento"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Login"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Link da Imagem"} />
			<SpacingHeight height={spacings.extraLarge} />
			<InputEye placeholder={"Senha"} />
			<SpacingHeight height={spacings.extraLarge} />
			<InputEye placeholder={"Confirmar Senha"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Ativo"} />
			<ButtonPrimary onPress={openScreen}>
				<TextButton>CADASTRAR</TextButton>
			</ButtonPrimary>
			<Gradient position="bottom" />
		</Container>
	);
};

export default UserSignUp;

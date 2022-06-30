import { Container, Logo, Title, SpacingHeight } from "../Login/styles";
import face from "../../../assets/logo.jpeg";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import Input from "../../components/Input";
import Gradient from "../../components/Gradient";
import ExitButton from "../../components/ExitButton";
import spacings from "../../Theme/spacings";
import { useNavigation } from "@react-navigation/native";

const PasswordRecovery = () => {
	const navigation = useNavigation();

	function openScreen() {
		navigation.navigate("Criar Senha");
	}

	return (
		<Container>
			<Gradient position="top" />
			<ExitButton />
			<Logo source={face} />
			<SpacingHeight height={spacings.extraLarge} />

			<Title>Recuperar Senha</Title>
			<Input placeholder={"Digite seu CPF"} />
			<SpacingHeight height={spacings.extraLarge} />
			<ButtonPrimary>
				<TextButton onPress={openScreen}>RECUPERAR</TextButton>
			</ButtonPrimary>
			<Gradient position="bottom" />
		</Container>
	);
};

export default PasswordRecovery;

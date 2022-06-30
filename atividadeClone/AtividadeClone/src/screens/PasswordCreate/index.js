import { Container, Logo, Title, SpacingHeight } from "../Login/styles";
import face from "../../../assets/logo.jpeg";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import InputEye from "../../components/InputEye";
import Gradient from "../../components/Gradient";
import ExitButton from "../../components/ExitButton";
import spacings from "../../Theme/spacings";
import { useNavigation } from "@react-navigation/native";

const PasswordRecovery = () => {
	const navigation = useNavigation();

	function openScreen() {
		navigation.navigate("Login");
	}

	return (
		<Container>
			<Gradient position="top" />
			<ExitButton />
			<Logo source={face} />
			<SpacingHeight height={spacings.extraLarge} />

			<Title>Criar Senha</Title>
			<InputEye placeholder={"Digite sua nova senha"} />
			<SpacingHeight height={spacings.extraLarge} />
			<InputEye placeholder={"Repita sua nova senha"} />
			<SpacingHeight height={spacings.extraLarge} />
			<ButtonPrimary>
				<TextButton onPress={openScreen}>RECUPERAR</TextButton>
			</ButtonPrimary>
			<Gradient position="bottom" />
		</Container>
	);
};

export default PasswordRecovery;

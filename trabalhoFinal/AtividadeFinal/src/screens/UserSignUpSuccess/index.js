import { Container, Logo, Title, SpacingHeight } from "./styles";
import face from "../../../assets/logo.jpeg";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import Gradient from "../../components/Gradient";
import spacings from "../../Theme/spacings";
import { useNavigation } from "@react-navigation/native";

const UserSignUpSuccess = () => {
	const navigation = useNavigation();

	function openScreen() {
		navigation.navigate("Login");
	}

	return (
		<Container>
			<Gradient position="top" />
			<Logo source={face} />
			<SpacingHeight height={spacings.extraLarge} />
			<SpacingHeight height={spacings.extraLarge} />
			<SpacingHeight height={spacings.extraLarge} />
			<SpacingHeight height={spacings.extraLarge} />
			<SpacingHeight height={spacings.extraLarge} />
			<Title>Usuário cadastrado com sucesso!</Title>
			<SpacingHeight height={spacings.extraLarge} />
			<ButtonPrimary>
				<TextButton onPress={openScreen}>LOGIN</TextButton>
			</ButtonPrimary>
			<Gradient position="bot" />
		</Container>
	);
};

export default UserSignUpSuccess;

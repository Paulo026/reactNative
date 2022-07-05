import {
	Container,
	Logo,
	Title,
	TextInfo,
	SpacingHeight,
	WrapperTextInfo,
	TextLink,
} from "./styles";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import Input from "../../components/Input";
import spacings from "../../Theme/spacings";
import Gradient from "../../components/Gradient";
import { useNavigation } from "@react-navigation/native";
import ExitButton from "../../components/ExitButton";
import SmallLogo from "../../components/SmallLogo";
import { Feather } from "@expo/vector-icons";
import colors from "../../theme/colors";

const UserChange = () => {
	const navigation = useNavigation();

	function openScreen() {
		navigation.navigate("Usuários");
	}

	return (
		<Container>
			<Gradient position="top" />
			<ExitButton />
			<SmallLogo />
			<Title>
				Alterar
				<br />
				Usuário
			</Title>
			<Input placeholder={"Nome"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"CPF"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Data de Nascimento"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Login"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Ativo"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Link da Imagem"} />
			<SpacingHeight height={spacings.extraLarge} />
			<SpacingHeight height={spacings.extraLarge} />
			<ButtonPrimary onPress={openScreen}>
				<TextButton>ALTERAR</TextButton>
			</ButtonPrimary>
			<Gradient position="bottom" />
		</Container>
	);
};

export default UserChange;

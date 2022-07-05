import { Container, Title, SpacingHeight, WrapperTextInfo, TextLink } from "./styles";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import Input from "../../components/Input";
import Gradient from "../../components/Gradient";
import ExitButton from "../../components/ExitButton";
import spacings from "../../Theme/spacings";
import { useNavigation } from "@react-navigation/native";
import SmallLogo from "../../components/SmallLogo/index";
import { Feather } from "@expo/vector-icons";
import colors from "../../Theme/colors";

const CategoryCreate = () => {
	const navigation = useNavigation();

	function openScreen() {
		navigation.navigate("Sobre Nós");
	}

	return (
		<Container>
			<Gradient position="top" />
			<ExitButton />
			<SmallLogo />
			<SpacingHeight height={spacings.extraLarge} />

			<Title>Cadastro{"\n"}de Categoria</Title>
			<Input placeholder={"Nome"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Link da Imagem"} />
			<SpacingHeight height={spacings.extraLarge} />
			<ButtonPrimary>
				<TextButton onPress={openScreen}>CADASTRAR</TextButton>
			</ButtonPrimary>
			<Gradient position="bottom" />
		</Container>
	);
};

export default CategoryCreate;

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

const ProductCreate = () => {
	const navigation = useNavigation();

	function openScreen() {
		navigation.navigate("Produtos");
	}

	return (
		<Container>
			<Gradient position="top" />
			<ExitButton />
			<SmallLogo />
			<Title>
				Cadastro
				<br />
				de Produto
			</Title>
			<Input placeholder={"Nome"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Descrição"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Preço R$"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Quantidade em estoque"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Link da Imagem"} />
			<SpacingHeight height={spacings.extraLarge} />
			<ButtonPrimary onPress={openScreen}>
				<TextButton>CADASTRAR</TextButton>
			</ButtonPrimary>
			<Gradient position="bottom" />
		</Container>
	);
};

export default ProductCreate;

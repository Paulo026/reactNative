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

const ProductChange = () => {
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
				Alterar
				<br />
				Produto
			</Title>
			<Input placeholder={"Produto 1"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"25,00"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"10"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"Imagem1.png"} />
			<WrapperTextInfo>
				<TextLink>
					Selecionar Imagem
					<Feather
						name="upload"
						size={15}
						color={`${colors.secondary}`}
						style={{ marginLeft: "7px" }}
					/>
				</TextLink>
			</WrapperTextInfo>
			<SpacingHeight height={spacings.extraLarge} />
			<ButtonPrimary onPress={openScreen}>
				<TextButton>ALTERAR</TextButton>
			</ButtonPrimary>
			<Gradient position="bottom" />
		</Container>
	);
};

export default ProductChange;

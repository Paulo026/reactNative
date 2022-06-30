import {
	CategoryLarge,
	CategoryMedium,
	Container,
	ImagesGroup,
	IconsGroup,
	Logo,
	Title,
	SubTitle,
	TextInfo,
	TextSimple,
	SpacingHeight,
	WrapperTextInfo,
	TextLink,
} from "./styles";
import spacings from "../../Theme/spacings";
import Gradient from "../../components/Gradient";
import { useNavigation } from "@react-navigation/native";
import ExitButton from "../../components/ExitButton";
import SmallLogo from "../../components/SmallLogo";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import colors from "../../Theme/colors";
import category1 from "../../../assets/5.jpg";
import category2 from "../../../assets/1.jpg";
import category3 from "../../../assets/3.jpg";

const UserSignUp = () => {
	const navigation = useNavigation();

	function openScreen() {
		navigation.navigate("Cadastro de Usuário feito com sucesso");
	}

	return (
		<Container>
			<Gradient position="top" />
			<Title>Marketplace</Title>
			<ExitButton />
			<SmallLogo />
			<SubTitle>Sobre nós...</SubTitle>
			<SpacingHeight height={spacings.extraLarge} />
			<TextSimple>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
				Ipsum has been the industry's unchanged. It was popularised in the 1960s with the
				release of Letraset sheets containing Lorem Ipsum passages, and more recently with
				desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
			</TextSimple>
			<SpacingHeight height={spacings.extraLarge} />
			<SubTitle>
				Categorias
				<Ionicons name="add" size={20} color={`${colors.secondary}`} />
			</SubTitle>
			<SpacingHeight height={spacings.extraLarge} />
			<IconsGroup>
				<Feather name="trash" size={20} color={`${colors.quinternary}`} />
				<Feather name="edit-3" size={20} color={`${colors.secondary}`} />
			</IconsGroup>
			<ImagesGroup>
				<CategoryMedium source={category3} />
				<CategoryLarge source={category1} style={{ elevation: 5 }} />
				<CategoryMedium source={category2} />
			</ImagesGroup>
			<SubTitle>Criadores</SubTitle>
			<SpacingHeight height={spacings.extraLarge} />

			<Gradient position="bottom" />
		</Container>
	);
};

export default UserSignUp;

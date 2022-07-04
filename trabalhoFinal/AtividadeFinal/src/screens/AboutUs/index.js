import {
	CategoryLarge,
	CategoryMedium,
	Container,
	ImagesGroup,
	IconsGroup,
	Title,
	SubTitle,
	TextSimple,
	SpacingHeight,
	People,
	PeopleWrapper,
	InfoWrapper,
	TextImage,
	InfoWrapper2,
} from "./styles";
import spacings from "../../Theme/spacings";
import Gradient from "../../components/Gradient";
import { useNavigation } from "@react-navigation/native";
import ExitButton from "../../components/ExitButton";
import SmallLogo from "../../components/SmallLogo";
import colors from "../../Theme/colors";
import NavBar from "../../components/NavBar";
import eduardo from "../../../assets/eduardo.jpg";
import leonardo from "../../../assets/leonardo.jpg";
import paulo from "../../../assets/paulo.jpg";
import tatiana from "../../../assets/paulo.jpg";
import wagner from "../../../assets/wagner.jpg";

const AboutUs = () => {
	const navigation = useNavigation();

	function openScreen() {
		navigation.navigate("Cadastro de Usuário feito com sucesso");
	}

	function openCategoryChange() {
		navigation.navigate("Alterar Categoria");
	}

	function openCategoryCreate() {
		navigation.navigate("Cadastro de Categoria");
	}

	return (
		<Container>
			<Gradient position="top" />
			<Title>Sobre nós...</Title>
			<ExitButton />
			<SmallLogo />
			<SpacingHeight height={spacings.extraLarge} />
			<TextSimple>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
				Ipsum has been the industry's unchanged. It was popularised in the 1960s with the
				release of Letraset sheets containing Lorem Ipsum passages, and more recently with
				desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
			</TextSimple>
			<SpacingHeight height={spacings.ultraLarge} />
			<SubTitle>Criadores</SubTitle>
			<PeopleWrapper>
				<People source={eduardo} />
				<People source={leonardo} />
				<People source={paulo} />
				<People source={tatiana} />
				<People source={wagner} />
			</PeopleWrapper>
			<InfoWrapper>
				<TextImage>Eduardo</TextImage>
				<TextImage>Leonardo</TextImage>
				<TextImage>Paulo</TextImage>
				<TextImage>Tatiana</TextImage>
				<TextImage>Wagner</TextImage>
			</InfoWrapper>

			<SpacingHeight height={spacings.extraLarge} />

			<NavBar />
			<Gradient position="bottom" />
		</Container>
	);
};

export default AboutUs;

// Verificar erro de imagem

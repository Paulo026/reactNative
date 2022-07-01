import {
	CategoryLarge,
	CategoryMedium,
	Container,
	ImagesGroup,
	IconsGroup,
	Logo,
	Title,
	SubTitle,
	TextSimple,
	SpacingHeight,
	WrapperTextInfo,
	TextLink,
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
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import colors from "../../Theme/colors";
import category1 from "../../../assets/5.jpg";
import category2 from "../../../assets/1.jpg";
import category3 from "../../../assets/3.jpg";
import NavBar from "../../components/NavBar";
import  alex  from "../../../assets/Alex.png";
import  alie  from "../../../assets/Alie.png";
import carlos from "../../../assets/Carlos.png";
import  beatriz  from "../../../assets/Beatriz.png";


import { View } from "react-native";

const UserSignUp = () => {
	const navigation = useNavigation();

	function openScreen() {
		navigation.navigate("Cadastro de Usuário feito com sucesso");
	}

	function openCategoryChange() {
		navigation.navigate("Alterar Categoria")
	}

	
	function openCategoryCreate() {
		navigation.navigate("Cadastro de Categoria")
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
				<Ionicons name="add" size={20} color={`${colors.secondary}`} onPress={openCategoryCreate} />
			</SubTitle>
			{/* <SpacingHeight height={spacings.extraLarge} /> */}
			<IconsGroup>
				<Feather name="trash" size={20} color={`${colors.quinternary}`} />
				<Feather name="edit-3" size={20} color={`${colors.secondary}`} onPress={openCategoryChange} />
			</IconsGroup>
			<ImagesGroup>
				<CategoryMedium source={category3} />
				<CategoryLarge source={category1} style={{ elevation: 5 }} />
				<CategoryMedium source={category2} />
			</ImagesGroup>
			<InfoWrapper2>
				<TextImage>Tec3</TextImage>
				<TextImage>Tec1</TextImage>
				<TextImage>Tec2</TextImage>			
			</InfoWrapper2>
			<SpacingHeight height={spacings.extraLarge} />
			<SubTitle>Criadores</SubTitle>
			<PeopleWrapper>
				<People source={alex} /> 
				<People source={beatriz} />
				<People source={carlos} />
				<People source={alie} />				
			</PeopleWrapper>
			<InfoWrapper>
				<TextImage>Alex</TextImage>
				<TextImage>Beatriz</TextImage>
				<TextImage>Carlos</TextImage>
				<TextImage>Alie</TextImage>
			</InfoWrapper>
		 
			<SpacingHeight height={spacings.extraLarge} />
			
			<NavBar /> 
			<Gradient position="bottom" />
		</Container>
	);
};

export default UserSignUp;



// Verificar erro de imagem
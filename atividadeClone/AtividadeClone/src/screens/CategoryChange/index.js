import { Container, Title, SpacingHeight, WrapperTextInfo, TextLink } from "./styles";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import Input from "../../components/Input"; 
import Gradient from "../../components/Gradient";
import ExitButton from "../../components/ExitButton";
import spacings from "../../Theme/spacings";
import { useNavigation } from "@react-navigation/native";
import SmallLogo from '../../components/SmallLogo/index';
import { Feather } from '@expo/vector-icons';
import colors from "../../Theme/colors";


const CategoryChange = () => {
	const navigation = useNavigation();

	function openScreen() {
		navigation.navigate("Marketplace");
	}

	return (
		<Container>
			<Gradient position="top" />
			<ExitButton />
			<SmallLogo />
			<SpacingHeight height={spacings.extraLarge} />

			<Title>Alterar{"\n"}Categoria</Title>
			<Input placeholder={"Tec1"} />
			<SpacingHeight height={spacings.extraLarge} />
			<Input placeholder={"imagem5.png"} />
			<WrapperTextInfo>
					<TextLink>Selecionar Imagem
					<Feather name="upload" size={15} color={`${colors.secondary}`} style={{marginLeft: "7px"}} />
					</TextLink>
			</WrapperTextInfo>
			<SpacingHeight height={spacings.extraLarge} />
			<ButtonPrimary>
				<TextButton onPress={openScreen}>ALTERAR</TextButton>
			</ButtonPrimary>
			<Gradient position="bottom" />
		</Container>
	);
};

export default CategoryChange;

import { Container, Logo, Title, SpacingHeight } from "./styles";
import face from "../../../assets/logo.jpeg";
import { ButtonPrimary, TextButton } from "../../components/CustomButton/styles";
import Gradient from "../../components/Gradient";
import spacings from "../../Theme/spacings";
import { useNavigation } from "@react-navigation/native";

const CategoryDelete = () => {
	const navigation = useNavigation();

	function openScreen() {
		navigation.navigate("Categorias");
	}

	return (
		<Container>
			<Gradient position="top" />
			<Logo source={face} />
			<SpacingHeight height={spacings.extraLarge} />
			<SpacingHeight height={spacings.extraLarge} />
			<SpacingHeight height={spacings.extraLarge} />
			<SpacingHeight height={spacings.extraLarge} />
			<Title>Deseja realmente deletar {"\n"}esta categoria?</Title>
			<SpacingHeight height={spacings.extraLarge} />
			<ButtonPrimary>
				<TextButton onPress={openScreen}>DELETAR</TextButton>
			</ButtonPrimary>
			<Gradient position="bot" />
		</Container>
	);
};

export default CategoryDelete;
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../Theme/colors";
import WrapperExitButton from "./styles";
import { useNavigation } from "@react-navigation/native";

const ExitButton = () => {
	const navigation = useNavigation();

	function returnToLogin() {
		navigation.navigate("Login");
	}

	return (
		<WrapperExitButton>
			<MaterialCommunityIcons
				name="location-exit"
				size={20}
				color={`${colors.secondary}`}
				onPress={returnToLogin}
			/>
		</WrapperExitButton>
	);
};

export default ExitButton;

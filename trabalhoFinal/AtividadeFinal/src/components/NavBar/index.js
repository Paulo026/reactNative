import React from "react";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { WrapperNavBar, Container } from "./styles";
import colors from "../../theme/colors";

const NavBar = () => {
	const navigation = useNavigation();

	function returnToMarket() {
		navigation.navigate("Sobre Nós");
	}

	function returnToCategory() {
		navigation.navigate("Categorias");
	}

	function returnToUser() {
		navigation.navigate("Usuários");
	}

	function returnToProduct() {
		navigation.navigate("Produtos");
	}

	return (
		<Container>
			<WrapperNavBar>
				<AntDesign
					name="home"
					size={28}
					color={`${colors.tertiary}`}
					onPress={returnToMarket}
				/>
				<AntDesign
					name="user"
					size={28}
					color={`${colors.tertiary}`}
					onPress={returnToUser}
				/>
				<AntDesign
					name="database"
					size={28}
					color={`${colors.tertiary}`}
					onPress={returnToCategory}
				/>
				<AntDesign
					name="tag"
					size={28}
					color={`${colors.tertiary}`}
					onPress={returnToProduct}
				/>
			</WrapperNavBar>
		</Container>
	);
};

export default NavBar;

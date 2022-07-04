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

	function returnToPurchase() {
		navigation.navigate("Carrinho");
	}

	function returnToFavorite() {
		navigation.navigate("Favoritos");
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
					onPress={returnToProduct}
				/>
				<AntDesign
					name="database"
					size={28}
					color={`${colors.tertiary}`}
					onPress={returnToPurchase}
				/>
				<AntDesign
					name="tag"
					size={28}
					color={`${colors.tertiary}`}
					onPress={returnToFavorite}
				/>
			</WrapperNavBar>
		</Container>
	);
};

export default NavBar;

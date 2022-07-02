import React from 'react';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { WrapperNavBar, Container } from './styles';

const NavBar = () => {
    const navigation = useNavigation();

    function returnToMarket() {
        navigation.navigate("Marketplace");
    }

    // function returnToBag() {
    //     navigation.navigate("Bag")     Criar Telas
    // }

    function returnToFavorite() {
        navigation.navigate("Favoritos")
    }

    
    function returnToProduct() {
        navigation.navigate("Produtos")
    }

  return (
    <Container>
    <WrapperNavBar>
    <AntDesign name="home" size={32} color="black" onPress={returnToMarket} />
    <SimpleLineIcons name="bag" size={32} color="black"  />
    <AntDesign name="staro" size={32} color="black" onPress={returnToFavorite} />
    <AntDesign name="shoppingcart" size={32} color="black"  onPress={returnToProduct}/>
    </WrapperNavBar>
    </Container>
  );
};

export default NavBar;
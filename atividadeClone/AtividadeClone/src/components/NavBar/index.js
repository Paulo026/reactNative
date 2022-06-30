import React from 'react';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { WrapperNavBar, Container } from './styles';

const NavBar = () => {
    const navigation = useNavigation();

    function returnToMarket() {
        navigation.navigate("MarketPlace");
    }

    // function returnToBag() {
    //     navigation.navigate("Bag")     Criar Telas
    // }

    // function returnToFavorite() {
    //     navigation.navigate("Favorite")
    // }

    
    // function returnToCart() {
    //     navigation.navigate("Cart")
    // }

  return (
    <Container>
    <WrapperNavBar>
    <AntDesign name="home" size={30} color="black" onPress={returnToMarket} />
    <SimpleLineIcons name="bag" size={30} color="black"  />
    <AntDesign name="staro" size={30} color="black" />
    <AntDesign name="shoppingcart" size={30} color="black" />
    </WrapperNavBar>
    </Container>
  )
}

export default NavBar;
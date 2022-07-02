import React from 'react';
import Gradient from '../../components/Gradient';
import SmallLogo from '../../components/SmallLogo';
import ExitButton from "../../components/ExitButton";
import NavBar from "../../components/NavBar";
import { Container, CardWrapper, Title, FavoriteImage, CardTextFavorite, TextView} from './styles';
import { View, FlatList } from "react-native";

const Card = [
  {
    id: "1",
    imagem: require("../../../assets/1.jpg"),
    nome: "Produto 1",
    preco: "Preço R$ 25,00",
    estoque: "10 unidades em estoque",
  },

  {
    id: "2",
    imagem: require("../../../assets/2.png"),
    nome: "Produto 2",
    preco: "Preço R$ 50,00",
    estoque: "1 unidade  em estoque",
  },

  {
    id: "3",
    imagem: require("../../../assets/3.jpg"),
    nome: "Produto 3",
    preco: "Preço R$ 30,00",
    estoque: "5 Unidades em estoque",
  }
];

const ListCard = ({ imagem, nome, preco, estoque}) => (
  <CardWrapper>
    <FavoriteImage source={imagem} />
      <TextView>
    <CardTextFavorite>{nome}</CardTextFavorite>

    <CardTextFavorite>{preco}</CardTextFavorite>

    <CardTextFavorite>{estoque}</CardTextFavorite>
    </TextView>
  </CardWrapper>
);




const Favorite = () => {
  const list = ({ item }) => (
    <ListCard
      imagem={item.imagem}
      nome={item.nome}
      preco={item.preco}
      estoque={item.estoque}
    />
  );

  return (
    <Container>
      <Gradient position="top" />
      <Title>Favoritos</Title>
      <ExitButton />
      <SmallLogo />

      <View>
        <FlatList
          data={Card}
          renderItem={list}
          keyExtractor={(item) => item.id}
          numColumns={1}
        />
      </View>
      <NavBar />
      <Gradient position="bottom" />
    </Container>

  )
}

export default Favorite;